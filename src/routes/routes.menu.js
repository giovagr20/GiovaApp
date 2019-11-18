const {Router} = require('express');
const router = Router();

router.get('/en', (req, res)=>{
    res.render('menu_english');
});

router.get('/es', (req, res)=>{
    res.render('menu_spanish');
});


module.exports = router;