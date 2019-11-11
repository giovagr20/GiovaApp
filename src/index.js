const express = require('express');
const path = require('path');
const app = express();


app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes/routes.menu'));

app.listen(app.get('port'), ()=>{
    console.log(`Server run on port ${app.get('port')}`);
});