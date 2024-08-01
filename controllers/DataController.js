const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/data.json');

const fetchData = () => {
    try {
        const fetchedRawData = fs.readFileSync(dataPath);
        return {
            success: true,
            message: 'Data fetched successfully.',
            data: JSON.parse(fetchedRawData)
        }
    } catch (err) {
        return {
            success: false,
            message: 'Error fetching data.',
            error: err.message
        };
    }
}

// Get all users
exports.getAllUsers = (req, res) => {
    try {
        
        const response = fetchData();
        const allUsers = response.data;
        // Respond the with fetched users data
        res.status(200).send(allUsers);

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Server error.',
            error: err.message
        })
    }
}

// Fetch user by id
exports.getUserById = (req, res) => {
    try {
        
        const response = fetchData();
        const fetchedUser = response.data.find((user) => user.id === req.params.id);
        // Respond with the fetched user data
        res.status(200).send(fetchedUser);

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Server error.',
            error: err.message
        })
    }
}

// Filter users by name
exports.searchUsersByName = (req, res) => {
    try {
        const {name} = req.params;
        const response = fetchData();
        const fetchedUsers = response.data;

        // Filter response based on name
        if (response.success){
            const filteredUsers = fetchedUsers.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()));
            return res.status(200).send(filteredUsers);
        }
        return res.status(500).send({
            success: false,
            message: response.message
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Server error.',
            error: err.message
        })
    }
}

// Fetch all users for a specific language
exports.fetchUsersByLanguage = (req, res) => {
    try {
        
        const { language } = req.query.query;   
        const response = fetchData();
        const fetchedUsers = response.data;

        // Filter users based on language
        if (response.success){

        }

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Server error.',
            error: err.message
        })
    }
}