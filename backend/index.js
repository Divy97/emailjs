const express = require("express");
const app = express();

const nodemailer = require("nodemailer");

app.use(bodyParsers.urlencoded({ extended: true }));
app.use(bodyParsers.json());

app.post("/send_mail", async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "theGap221@outlook.com",
      pass: "thegap@123",
    },
  });

  const options = {
    from: "theGap221@outlook.com",
    to: "divyparekh1810@gmail.com",
    subject: "Sending email",
    text: "hey",
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }

    console.log("Sent" + info.response);
  });

  //   await transport.sendMail({
  //     from: "divyparekh1810@outlook.com",
  //     to: "divyparekh1810@gmail.com",
  //     subject: "Student UID",
  //     html: `
  //         <div className='email'
  //             style="
  //                 border: 1px solid black;
  //                 padding: 20px;
  //                 font-family: sans-serif;
  //                 lint-height: 2;
  //                 font-size:20px;
  //             "
  //         >
  //         <h2>Hello "User"</h2>
  //         <p>${text}</p>
  //         <p>Thank you!</p>
  //         </div>
  //     `,
  //   });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server Running on PORT 4000");
});
