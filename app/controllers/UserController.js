const User = require('../models/User');

class UserController {

    //Login and Sign in user
    registerUser(req, res) {
        //check user_name and email exist in database
        User.findOne({ user_name: req.body.user_name ,email: req.body.email}, function(err, users) {
            if(users) res.status(400).send('exist')
        })

            
        const users = new User(req.body)
        users.save()
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err))
    }

    loginUser(req, res) {

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