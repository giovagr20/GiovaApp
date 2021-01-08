const _dataSend = {};
const nodeMailer = require('nodemailer');
_dataSend.sendNewEmail = async(name, email, subject, message)=>{
  
const user = `devgiovagr20@gmail.com`;
const pass = `gio.17lina2019`;

let transporter = await nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: pass // generated ethereal user
    }});

    transporter.verify(function(error,success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

  let _dataSend = await transporter.sendMail({
    from: user, // sender address
    to: "giovannyg32@gmail.com", // list of receivers
    subject: `${subject}`, // Subject line
    html: `
    Has recibido un nuevo mensaje de ${name}
    <br>
    Email = ${email} 
    <br>
    <b>${message}</b>` // html body
  });
}

_dataSend.sendNewEmail().catch(console.error);

module.exports = _dataSend;