const {Router} = require('express');
const router = Router();

router.get('/en', (req, res)=>{
    res.render('menu_english');
});

router.get('/', (req,res)=>{
    res.render('menu_spanish');
});

router.get('*', (req,res, next)=>{
    res.render('error');
    next(err);
})


module.exports = router;