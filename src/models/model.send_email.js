/*const _dataSend = {};
const nodeMailer = require('nodemailer');
_dataSend.sendNewEmail = async(name, email, subject, message)=>{
    
let testAccount = await nodeMailer.createTestAccount();
let transporter = nodeMailer.createTransport({
    service: 'yopmail',
    auth: {
      user: 'giova@gmail.com', // generated ethereal user
    }
  });

  let _dataSend = await transporter.sendMail({
    from: '<giova@yopmail.com>', // sender address
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

module.exports = _dataSend;*/
