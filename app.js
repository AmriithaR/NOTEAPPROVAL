const express = require("express");
const exphbs=require("express-handlebars");
const bodyParser=require("body-parser");
const app=express();
const mssql=require("mssql")
require('dotenv').config();

//port enable
const port=process.env.port || 5000;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

//static files include
app.use(express.static("public"));

//template engine
const handlebars = exphbs.create({extnname:".hbs"});
app.engine('hbs',handlebars.engine);
app.set("view engine","hbs");







//Router
//app.get('/',(req,res)=>{
//res.render("home");
//});
const routes=require("./server/routes/NoteCreator")
app.use('/',routes);
//listen port
app.listen(port,()=>{
    console.log("Listening port:"+port)
});
