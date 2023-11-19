const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')
const index=require('./routes/index')
const cookieParser=require("cookie-parser")
const entry=require('./routes/entry')

global.db=require('./config/db');

const app=express()


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(cookieParser(),(req,res,next)=>{
    res.cookie("ind",0);
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',index);
app.use('/entry',entry);
app.listen(3000,(req,res)=>{
    console.log("listning on port 3000");
});
module.exports=app;