const express = require('express');
const router = express.Router();
const DataControllers = require('../controllers/DataController');


// Get all users
router.get('/', DataControllers.getAllUsers);

// Get User by ID
router.get('/:id', DataControllers.getUserById);

// Filter users by name
router.get('/search/:name', DataControllers.searchUsersByName);

// Fetch all users for a specific language
// router.get('/')

module.exports = router;