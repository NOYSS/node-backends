const express = require('express');
const app = express();

const userRoute = express.Router();
let User = require('../model/User');

const mainPath = '/users';

// Add User
userRoute.route(`${mainPath}/add-user`).post((req, res) => {
    User.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Get User All
userRoute.route(`${mainPath}`).get((req, res) => {
    User.find(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Get User By ID
userRoute.route(`${mainPath}/read-user/:id`).get((req, res) => {
    User.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Update User
userRoute.route(`${mainPath}/update-user/:id`).put((req, res) => {
    User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error);
        } else {
            res.json(data);
            console.log(data);
        }
    })
})

// Delete User By ID
userRoute.route(`${mainPath}/delete-user/:id`).delete((req, res, next) => {
    console.log(req.params.id)
    User.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            });
        }
    })
})

module.exports = userRoute;