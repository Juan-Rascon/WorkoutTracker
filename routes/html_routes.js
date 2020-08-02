const express = require('express');
const router  = express.Router();

router.get('/stats', (req, res) => {
    res.sendFile('/stats.html',{root: './public'});
});

router.get('/exercise', (req, res) => {
    res.sendFile('/exercise.html',{root: './public'});
});


module.exports = router;