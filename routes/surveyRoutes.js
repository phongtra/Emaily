const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const mongoose = require("mongoose");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplates");
const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");
const Survey = mongoose.model("surveys");
module.exports = app => {
  app.post("/api/surveys/webhooks", (req, res) => {
    const p = new Path("/api/thanks/:surveyId/:choice");
    _.chain(req.body)
      .map(({ url, email }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return {
            email,
            surveyId: match.surveyId,
            choice: match.choice
          };
        }
      })
      .compact()
      .uniqBy("email", "surveyId")
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false }
            }
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date()
          }
        ).exec();
      })
      .value();
    res.send({});
  });
  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false
    });
    res.send(surveys);
  });
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients, fromEmail } = req.body;
    const survey = new Survey({
      title,
      from: fromEmail,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });
    //Great place to send an email!!
    const mailer = new Mailer(survey, surveyTemplate(survey), fromEmail);
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
  app.post("/api/surveys/:id", async (req, res) => {
    await Survey.deleteOne({ _id: req.body.id }).exec();
    res.end();
  });
};
