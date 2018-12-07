var express = require('express');
var router = express.Router();
const ctrlUsers = require('../controllers/users');
const ctrlLandmarks = require('../controllers/landmarks');

router.get('/', ctrlUsers.Login);
router.get('/login', ctrlUsers.Login);
router.get('/register', ctrlUsers.Register);
router.get('/users', ctrlUsers.Users);
router.get('/userdetails', ctrlUsers.Userdetails);

router.get('/landmarks', ctrlLandmarks.landmarksList);
router.get('/landmark', ctrlLandmarks.landmarkInfo);

router.get('/logout', ctrlUsers.Login);

module.exports = router;
