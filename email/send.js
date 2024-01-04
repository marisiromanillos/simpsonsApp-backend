//boilerplate sib set up
const SibApiV3Sdk = require("sib-api-v3-sdk");
const defaultClient = SibApiV3Sdk.ApiClient.instance;

const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = ``;

const send = (subject, htmlContent, to) => {
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = htmlContent;
  sendSmtpEmail.sender = {
    name: "sender name",
    email: "marisiromanillos@gmail.com",
  };
  sendSmtpEmail.replyTo = {
    name: "sender name",
    email: "marisiromanillos@gmail.com",
  };
  sendSmtpEmail.to = to;

  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    (data) => {
      console.log("API said:", data);
    },
    (error) => {
      console.log(error);
    }
  );
};
