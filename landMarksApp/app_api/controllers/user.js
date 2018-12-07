const mongoose = require('mongoose');
const User = mongoose.model('user');
var jwt = require('jsonwebtoken');


const usersCreate = function(req, res) {
    User.create({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        location: req.body.location,
        admin: 'y'
    }, (err, user) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            let payload = { subject: user._id}
            let token = jwt.sign(payload, 'secretKey')

            res
                .status(201)
                .send({token});
        }
    });
};


const userLogin =  function(req,res) {
    let userData = req.body;
    User.findOne({email: userData.email}, (error, user) => {
        if(error){
            console.log(error);
        } else {
            if(!user){
                res.status(401).send('Invalid email');
            } else {
                if(user.password !== userData.password){
                    res.status(401).send('Invalid password');
                } else {
                    // for using jwt https://www.youtube.com/watch?v=7L80dKtfHe0&index=24&list=PLC3y8-rFHvwg2RBz6UplKTGIXREj9dV0G
                    let payload = {subject : user};
                    let token = jwt.sign(payload, 'secretKey');
                    console.log("You are in");
                    res.status(200).send({token, user});
                }
            }
        }
    })
};


const usersReadOne =  function(req,res) {
    let userData = req.body;
    User.find({email: userData.email})
        .exec(function(err, user){
            if(err) {
                console.log(err);
            } else{
                res.json(user)
            }
        });
};


const checkAdmin =  function(req,res) {
    let userData = req.body;
    User.findOne({email: userData.email}, (error, user) => {
        if(error){
            console.log(error);
        } else {
            if(!user){
                res.status(401).send('Invalid email');
            } else {
                if(user.admin === 'y'){
                    res.json(true);
                } else {
                    res.json(false);
                    // res.status(200).send(user);
                }
            }
        }
    })
};







const updateUser = function(req,res) {
    User.findById(req.body.id)
    .exec((err, user) => {
            if (!user) {
                res
                    .json(404)
                    .status({
                        "message": "user not found"
                    });
                return;
            } else if (err) {
                res
                    .status(400)
                    .json(err);
                return;
            }
                user.email = req.body.email;
                user.password = req.body.password;
                user.firstName = req.body.firstName;
                user.location = req.body.location;
                user.save((err, user) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                } else {
                    res
                        .status(200)
                        .json(user);
                }
            });
        }
    );
};





const allUsers = function(req,res){
    User.find({})
        .exec(function(err, users){
            if(err) {
                console.log(err);
                res
                    .status(400)
                    .json(err);
            } else{
                res.json(users);
            }
        });
};

const usersDeleteOne = function (req, res) {
    let userid = req.body;
    if (userid) {
        User
            .findByIdAndRemove(userid)
            .exec((err, userid) => {
                    if (err) {
                        res
                            .status(404)
                            .json(err);
                        return;
                    }
                    res
                        .status(204)
                        .json('in delete');
                }
            );
    } else {
        res
            .status(404)
            .json({
                "message": "No user"
            });
    }
};

module.exports = {
    usersCreate,
    usersReadOne,
    updateUser,
    allUsers,
    usersDeleteOne,
    userLogin,
    checkAdmin
};
