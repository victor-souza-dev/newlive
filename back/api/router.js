const express = require('express');
const router = express.Router();
const { vendasController } =  require('./src/controllers/vendasController');
const controler = new vendasController

router.get('/',controler.get);


module.exports = router;