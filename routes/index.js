const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	// res.send('Hello world - tessst')
	res.render('index')
})

module.exports = router
