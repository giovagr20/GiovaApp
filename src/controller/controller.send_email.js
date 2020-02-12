const _sendEmail = {};
const _sendData = require('../models/model.send_email');


_sendEmail.getMessageSpanish = (req, res) => {

  res.send(req.body);
  

  /*  if (!inputNameEs) {
      res.redirect('/error');
    }
    _sendData.sendNewEmail(inputNameEs, inputEmailEs, inputSubjectEs, areaMessageEs); */
};


_sendEmail.getMessageEnglish = (req, res) => {
  res.send(req.body);

  /*if (!inputNameEs) {
      res.redirect('/error');
    }
    _sendData.sendNewEmail(inputNameEs, inputEmailEs, inputSubjectEs, areaMessageEs);*/
};

module.exports = _sendEmail;

