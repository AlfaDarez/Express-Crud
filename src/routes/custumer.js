const express = require('express');
const router = express.Router();
const custumerController = require('../controllers/custumerController');

router.get('/',custumerController.list);
router.post('/add',custumerController.save);
router.get('/delete/:id',custumerController.delete);
router.get('/edit/:id',custumerController.edit);
router.post('/update/:id',custumerController.update);







module.exports = router;