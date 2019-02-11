This is a full stack application built with React, Redux, Redux Form for Front-End side
and Node/Expressjs, Passportjs, Mongoosejs for Back-End side and I use MongoDB for
Database. If you want to use try this app, clone this project and run "npm install"
to download all of the dependencies. Then you need to keys for each of these services.
googleClientID
googleClientSecret
mongoURI: register this on mlab
cookieKey: Any random string
stripePublishableKey
stripeSecretKey
sendGridKey:
redirectDomain: "http://localhost:3000"

Create a dev.js file in config folder and module.exports an object with these key properties and that's it
