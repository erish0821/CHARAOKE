var express = require('express');
var router = express.Router();
const tableController = require('../controller/dbController');



/* GET users listing. */
router.get('/', tableController.getTableData);

module.exports = router;
