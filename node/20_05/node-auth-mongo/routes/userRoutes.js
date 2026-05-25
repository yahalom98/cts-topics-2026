let express = require('express');
let User = require('../models/User');
let authMiddleware = require('../middleware/authMiddleware');

let router = express.Router();

router.get('/profile', authMiddleware, (req, res)=>{
    let user = User.findById(req.user.id).select('-password');

    res.json({
        message:'Private Data',
        user
    })
})

module.exports = router;