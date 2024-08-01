const express = require('express');
const router = express.Router();
const DataControllers = require('../controllers/DataController');


// Get all users
router.get('/', DataControllers.getAllUsers);

// Get User by ID
router.get('/:id', DataControllers.getUserById);

// Filter users by name
router.get('/search/name/:name', DataControllers.searchUsersByName);

// Fetch all users for a specific language
router.get('/filter/language/:language', DataControllers.fetchUsersByLanguage);

// Sort users by name
router.get('/sort/name/:order', DataControllers.sortUsersByName);

// Sort users by version
router.get('/sort/version/:order', DataControllers.sortUsersByVersion);

// Fetch all users with a keyword in their bio
router.get('/search/bio/:keyword', DataControllers.getAllUsersByBioKeyword);

// Fetch all users within a version range
router.get('/version/range/:min/:max', DataControllers.getAllUsersByVersionRange);

// Fetch all users within a version range and sort in order
router.get('/version/range/:min/:max/sort/:order', DataControllers.getAllUsersByVersionRangeSortedByVersion);


module.exports = router;