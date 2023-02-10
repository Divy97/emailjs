const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "theGap221@outlook.com",
    pass: "thegap@123",
  },
});

const options = {
  from: "theGap221@outlook.com",
  to: "divy27530@gmail.com",
  subject: "Sending email",
  text: "Hello to divy",
};

transporter.sendMail(options, function (err, info) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Sent" + info.response);
});
