const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>GET : /menu 요청에 대한 분리 후 응답</h1>')
});

module.exports = router;