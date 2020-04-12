var debug   = require('debug');
var express = require('express');
var router  = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
	var data = req.body;
	debug(JSON.stringify(data));
	return res.status(200).send({ msg: "Data Received", data }).end();
})

module.exports = router;
