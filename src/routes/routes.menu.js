const { Router } = require('express');
const router = Router();
const _sendEmail = require('../controller/controller.send_email');



router.get('/', (req, res) => {
    res.render('menu_english');
});

router.get('/es', (req, res) => {
    res.render('menu_spanish');
});

router.get('*', (req, res, next) => {
    res.render('error');
    next(err);
})

router.post('/contact-es', _sendEmail.getMessageSpanish);
router.post('/contact-en', _sendEmail.getMessageEnglish);

module.exports = router;