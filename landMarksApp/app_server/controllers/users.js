
const Register = function(req, res){
    res.render('register')
};

const Login = function(req, res){
    res.render('login')
};

const Userdetails = function (req, res) {
    res.render('userdetails')
};

const Users = function (req, res) {
    res.render('users',{
        title: 'All Users',
        pageHeader: {
            title: 'Users',
        },
        details: [{
            id: 34238847328,
            email: 'al@al.com',
            password: 'password1234',
            firstName: 'Alan',
            location: 'Kerry'
        }, {
            id: 34238847328,
            email: 'dave@dave.com',
            password: 'password4321',
            firstName: 'Dave',
            location: 'Cork'
        }, {
            id: 34238847328,
            email: 'dylan@dylan.com',
            password: 'password9876',
            firstName: 'Dylan',
            location: 'Dublin'
        }, {
            id: 34238847328,
            email: 'tim@tim.com',
            password: 'password6543',
            firstName: 'Tim',
            location: 'Longford'
        }, {
            id: 34238847328,
            email: 'steve@steve.com',
            password: 'password4567',
            firstName: 'Steve',
            location: 'Galway'
        }]
    })
};




module.exports = {
    Register,
    Login,
    Userdetails,
    Users};