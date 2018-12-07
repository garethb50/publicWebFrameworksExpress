const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/user');
const ctrlLandmarks = require('../controllers/landmark');


// users
router
    .route('/register')
    .get(ctrlUsers.usersCreate)
    .post(ctrlUsers.usersCreate);

router
    .route('/login')
    .post(ctrlUsers.userLogin);

router
    .route('/getUserDetails')
    .post(ctrlUsers.usersReadOne);

router
    .route('/update')
    .post(ctrlUsers.updateUser);

router
    .route('/getAllUsers')
    .get(ctrlUsers.allUsers);

router
    .route('/deleteUser')
    .post(ctrlUsers.usersDeleteOne);


router
    .route('/checkAdmin')
    .post(ctrlUsers.checkAdmin);






router
    .route('/addLandmark')
    .get(ctrlLandmarks.landmarkCreate)
    .post(ctrlLandmarks.landmarkCreate);

router
    .route('/allLandmarks')
    .get(ctrlLandmarks.allLandmarks);

router
    .route('/getLandmark')
    .post(ctrlLandmarks.landmarkReadOne);



module.exports = router;
