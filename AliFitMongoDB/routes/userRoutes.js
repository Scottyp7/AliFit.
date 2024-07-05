let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js will be matched if you give the file path

// USERS
router.get('/users', (req, res) => {
    Controllers.userController.getUsers(res);
})

router.get('/users/:id', (req, res) => {
    Controllers.userController.getUserByID(req,res);
})

router.post('/create', (req, res) => {
    Controllers.userController.createUser(req.body, res);
})

router.put('/:id', (req, res) => {
    Controllers.userController.updateUser(req, res)
})
router.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res)
})

module.exports = router;