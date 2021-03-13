const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {

    //Sign in user
    async registerUser(req, res) {
        //check email exist in database
        const checkEmail = await User.findOne({email: req.body.email})
        if(checkEmail) return res.status(400).send('Email already exists')

        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.user_password, salt)
            
        const users = new User({user_name: req.body.user_name, user_password: hashedPassword, email: req.body.email})
        users.save()
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err))
    }

    //login users
    async loginUser(req, res) {
        //check email exist in database
        const checkLogin = await User.findOne({email: req.body.email})
        if(!checkLogin) return res.status(400).send('Email not found')

        //check password
        const checkPassword = await bcrypt.compare(req.body.user_password, checkLogin.user_password)
        if(!checkPassword) return res.status(400).send('Invalid Password')

        //create token
        const token = jwt.sign({_id: checkLogin._id}, process.env.ACCESS_TOKEN_SECRET);
        res.header('token', token).send(token)

    }

    //token
    fetchData(req, res) {
        res.json({
            data: {
                age: 50,
                gender: 50,
            }
        })
    }
    
    //API
    listAll(req, res) {
        //C1
        // User.find({}, function(err, users) {
        //    if(!err) res.json(users);
        //    else res.status(500).json(err)
        // })

        //C2
        User.find({})
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err))
    }
    listOne(req, res) {
        //C1
        // User.findById({_id:req.params.id}, function(err, users) {
        //     if(!err) res.json(users);
        //     else res.status(500).json(err)
        // })

        //C2
        User.findById({_id:req.params.id})
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err))
    }
    createUser(req, res) {
        //C1
        // User.create(req.body, function(err, users) {
        //     if(!err) res.json(users)
        //     else res.status(500).json(err)
        // })

        //C2
        const users = new User(req.body)
        users.save()
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err))

    }
    updateUser(req, res) {

        //if(req. == 0) {res.status(404).send('co loi'); return}
        //C1
        // User.updateOne({_id: req.params.id}, value, function(err, users) {
        //     if(!err) res.json(users);
        //     else res.status(500).json(err)
        // })

        //C2
        User.updateOne({_id: req.params.id}, req.body)
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err))
    }
    deleteUser(req, res) {
        //C1
        // User.deleteOne({_id:req.params.id}, function(err, users) {
        //     if(!err) res.send(users);
        //     else res.status(500).json(err);
        // })

        //C2
        User.remove({_id: req.params.id})
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err))
    }
}

module.exports = new UserController();