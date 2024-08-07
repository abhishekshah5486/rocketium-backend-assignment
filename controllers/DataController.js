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
        
        const { language } = req.params;   
        const response = fetchData();
        const fetchedUsers = response.data;

        // Filter users based on language
        if (response.success){
            const filteredUsers = fetchedUsers.filter((user) => user.language.toLowerCase() === language.toLowerCase());
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

// Sort users by name in asc or desc
exports.sortUsersByName = (req, res) => {
    try {
        
        const { order } = req.params;
        const response = fetchData();
        const fetchedUsers = response.data;

        // Sort users by name in order
        if (response.success){
            const sortedUsers = fetchedUsers.sort((a, b) => {
                if (order.toLowerCase() === 'asc'){
                    return a.name.localeCompare(b.name);
                }
                else if (order.toLowerCase() === 'desc') return b.name.localeCompare(a.name);
                else return [];
            })
            return res.status(200).send(sortedUsers);
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

// Sort users by version number
exports.sortUsersByVersion = (req, res) => {
    try {
        
        const { order } = req.params;
        const response = fetchData();
        const fetchedUsers = response.data;

        // Sort users by version in order
        if (response.success){
            const sortedUsers = fetchedUsers.sort((a, b) => {
                if (order.toLowerCase() == 'asc') return a.version - b.version;
                else if (order.toLowerCase() == 'desc') return b.version - a.version;
                else return [];
            })
            return res.status(200).send(sortedUsers);
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

// Fetch all users having a specific keyword in their bio
exports.getAllUsersByBioKeyword = async (req, res) => {
    try {
        
        const { keyword } = req.params;
        const response = fetchData();
        const fetchedUsers = response.data;

        // Filter users based on the keyword
        if (response.success){
            const filteredUsers = fetchedUsers.filter((user) => user.bio.toLowerCase().includes(keyword.toLowerCase()));
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

// Fetch all users within a version range
exports.getAllUsersByVersionRange = async (req, res) => {
    try {
        
        const { min, max } = req.params;
        const response = fetchData();
        const fetchedUsers = response.data;

        // Filter users within a version range and sort in order
        if (response.success){
            const filteredUsers = fetchedUsers.filter((user) => user.version >= min && user.version <= max);
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

// Fetch all users within a version range and sort in order
exports.getAllUsersByVersionRangeSortedByVersion = async (req, res) => {
    try {
        
        const { min, max, order } = req.params;
        const response = fetchData();
        const fetchedUsers = response.data;

        // Filter users within a version range and sort in order
        if (response.success){
            const filteredUsers = fetchedUsers.filter((user) => user.version >= min && user.version <= max).sort((a, b) => {
                if (order.toLowerCase() == 'asc'){
                    return a.version - b.version;
                }
                else if (order.toLowerCase() == 'desc') return b.version - a.version;
                else return [];
            })
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

// Retrieve all users with the highest version number
exports.getLatestUsersByVersion = async (req, res) => {
    try {
        
        const { limit } = req.params;
        const response = fetchData();
        const fetchedUsers = response.data;

        if (response.success){
            // Sorting the fetched users in desc based on version number
            const sortedUsersByVersionDesc = fetchedUsers.sort((a, b) => {
                return b.version - a.version;
            })
            const limitedUsers = sortedUsersByVersionDesc.slice(0, limit);
            return res.status(200).send(limitedUsers);
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

// Retrieve all users whose names start with given keyword
exports.getAllUsersByNameStartingWith = async (req, res) => {
    try {
        
        const { keyword } = req.params;
        const response = fetchData();
        const fetchedUsers = response.data;

        // Filter users based on the query
        if (response.success){
            const filteredUsers = fetchedUsers.filter((user) => user.name.toLowerCase().startsWith(keyword.toLowerCase()));
            res.status(200).send(filteredUsers);
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

// Retrieve all users whose names start with given keyword
exports.getAllUsersByNameStartingWithSortedByNameInOrder = async (req, res) => {
    try {
        
        const { keyword, order } = req.params;
        const response = fetchData();
        const fetchedUsers = response.data;

        // Filter users based on the query
        if (response.success){
            const filteredUsers = fetchedUsers.filter((user) => user.name.toLowerCase().startsWith(keyword.toLowerCase()));
            const sortedUsers = filteredUsers.sort((a, b) => {
                if (order.toLowerCase() === 'asc'){
                    return a.name.localeCompare(b.name);
                }
                else if (order.toLowerCase() === 'desc') return b.name.localeCompare(a.name);
                else return [];
            })
            res.status(200).send(sortedUsers);
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
