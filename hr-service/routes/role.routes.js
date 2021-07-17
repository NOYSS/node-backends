const express = require('express');
const app = express();

const roleRoute = express.Router();
let Role = require('../model/Role');

const mainPath = '/roles';

// Add User
roleRoute.route(`${mainPath}/add-role`).post((req, res) => {
    Role.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Get User All
roleRoute.route(`${mainPath}`).get((req, res) => {
    Role.find(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Get User By ID
roleRoute.route(`${mainPath}/read-role/:id`).get((req, res) => {
    Role.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Update User
roleRoute.route(`${mainPath}/update-user/:id`).put((req, res) => {
    Role.findByIdAndUpdate(req.params.id, {
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
roleRoute.route(`${mainPath}/delete-user/:id`).delete((req, res, next) => {
    Role.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            });
        }
    })
})

module.exports = roleRoute;