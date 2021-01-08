const _sendEmail = {};
const _sendData = require('../models/model.send_email');


_sendEmail.getMessageSpanish = (req, res) => {

  let name = req.body.inputNameEn;
  let email = req.body.inputEmailEn;
  let subject = req.body.inputSubjectEn;
  let description = req.body.areaMessageEn;

  if((name === null || name ==="") &&
    (email === "" || email === null)&&
    (subject === "" || subject === null) &&
    (description === "" || description===null)) {
      res.send(`<h1 class="alert alert-danger" role="alert"> Debes llenar la totalidad de campos </h1>`)
    }

  //{"inputNameEn":"","inputEmailEn":"","inputSubjectEn":"","areaMessageEn":""}
  

  /*  if (!inputNameEs) {
      res.redirect('/error');
    }
    _sendData.sendNewEmail(inputNameEs, inputEmailEs, inputSubjectEs, areaMessageEs); */
};


_sendEmail.getMessageEnglish = (req, res) => {

  let name = req.body.inputNameEn;
  let email = req.body.inputEmailEn;
  let subject = req.body.inputSubjectEn;
  let description = req.body.areaMessageEn;

  if((name === null || name ==="") &&
    (email === "" || email === null)&&
    (subject === "" || subject === null) &&
    (description === "" || description===null)) {
      res.send(`<h1 class="alert alert-danger" role="alert"> Debes llenar la totalidad de campos </h1>
      <a src="/en" class="btn btn-primary">Regresar</a>`)
    } else {
      res.send(`<h1 class="alert alert-success" role="alert"> Se envío mensaje</h1> 
      <a src="/en" class="btn btn-primary">Regresar</a>`)
    }

  /*if (!inputNameEs) {
      res.redirect('/error');
    }
    _sendData.sendNewEmail(inputNameEs, inputEmailEs, inputSubjectEs, areaMessageEs);*/
};

module.exports = _sendEmail;

