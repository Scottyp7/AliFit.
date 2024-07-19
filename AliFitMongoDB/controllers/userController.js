"use strict";

let Models = require("../models"); // matches index.js

//USERS
const getUsers = (res) => {
    // finds all users
    Models.User.find({})

        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.status(500).send({error: err.message })
        })
}

const getUserByID = (req,res) => {
    // finds all users
    //$EQ stops anyone injecting unwanted commands into the database.
    Models.User.findOne({_id:{$eq:req.params.id}})

        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.status(500).send({ error: err.message })
        })
}

const findUsersByType = (req,res) => {

    //$regex finds all documents with the firstName - i means its not case senstive
    Models.User.find({[req.params.field]: {'$regex': `^${req.params.data}`, $options: 'i'}})

        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.status(500).send({ error: err.message })
        })
}

const createUser = (data, res) => {
    // creates a new user using JSON data POSTed in request body
    console.log(data)
    new Models.User(data).save()

        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.status(500).send({ error: err.message })
        })
}

const updateUser = (req, res) => {
    // updates the user matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.User.findByIdAndUpdate(req.params.id, req.body , { new: true })

        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.status(500).send({error: err.message })
        })
} 

const deleteUser = (req, res) => {
    // deletes the user matching the ID from the param
    Models.User.findByIdAndDelete(req.params.id)
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
        console.log(err);
        res.status(500).send({error: err.message })
    })
}


module.exports = {
    getUsers, createUser, updateUser, deleteUser , getUserByID, findUsersByType
}