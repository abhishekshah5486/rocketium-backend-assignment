const express = require('express');
const app = express();
require('dotenv').config();


app.use(express.json());

const port = process.env.PORT || 8086;
app.listen(port, () => {
    try {
        console.log(`Server running on port ${port}`);
    } catch (err) {
        console.log(err);
    }
})