// eslint-disable-next-line
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default emails => {
  const invlaidEmailsArray = emails
    .split(",")
    .map(email => email.trim())
    .filter(email => !re.test(email));

  if (invlaidEmailsArray.length) {
    return `These emails are invalid: ${invlaidEmailsArray}`;
  }
  return;
};
