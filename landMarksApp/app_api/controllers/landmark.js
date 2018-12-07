const mongoose = require('mongoose');
const Landmark = mongoose.model('landmark');



const landmarkCreate = function(req, res) {
    Landmark.create({
        name: req.body.name,
        country: req.body.country,
        img: req.body.img,
        url: req.body.url,
        coords: [req.body.lng, req.body.lat],
        value: req.body.value,

    }, (err, landmark) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(landmark);
        }
    });
};

const allLandmarks = function(req,res){
    Landmark.find({})
        .exec(function(err, landmarks){
            if(err) {
                console.log(err);
                res
                    .status(400)
                    .json(err);
            } else{
                res.json(landmarks);
            }
        });
};




const landmarkReadOne =  function(req,res) {
    console.log(req.body._id);
    let landmarkData = req.body;
    Landmark.find({_id: landmarkData._id})
        .exec(function(err, landmark){
            if(err) {
                console.log(err);
                res
                    .status(400)
                    .json(err);
            } else{
                res.json(landmark);
            }
        });
};



module.exports = {
    landmarkCreate,
    allLandmarks,
    landmarkReadOne
};