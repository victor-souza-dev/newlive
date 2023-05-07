require('dotenv').config();
const { json } = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path')
const router = require('./router');
const midlware = require ('./src/middlewares/global');
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL)
    .then(()=>app.emit('ok'))
    .catch(erro => console.log(erro))

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.resolve(__dirname,'public')));
app.use(cors());
app.use(router);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine','ejs');

app.on('ok', ()=> app.listen(3000));