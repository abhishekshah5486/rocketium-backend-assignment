const express = require('express');
const app = express();
require('dotenv').config();
const DataRoutes = require('./routes/DataRoutes');

app.use(express.json());
app.use('/api/users', DataRoutes);

const port = process.env.PORT || 8086;
app.listen(port, () => {
    try {
        console.log(`Server running on port ${port}`);
    } catch (err) {
        console.log(err);
    }
})