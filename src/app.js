//aqui se incluyen las cosas que se importan
const express = require('express');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const morgan = require('morgan');
const app = express();
const path = require('path');
const custumerRouter = require('./routes/custumer');


// se integran con ejs en el view engine

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(morgan('dev'));

app.use(myconnection(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'nodeMysql'
},'single'));

app.use(express.urlencoded({extended:false}));

// uso de las rutas
app.use('/',custumerRouter);

//archivo Publico
app.use(express.static(path.join(__dirname,'public')));

//server en accion 
 
app.listen(3000,()=>{
    console.log('Server on Port 3000');
});


