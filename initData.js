const axiosInstance = require('axios');
const path = require('path');
const dataPath = path.join(__dirname, './data/data.json');
const fs = require('fs');

const initData = async () => {
    const saveData = (responseData) => {
        const jsonData = JSON.stringify(responseData, null, 2);
        try {
            fs.writeFileSync(dataPath, jsonData, 'utf8');
            console.log('Data fetched and saved sucessfully.');
        } catch (err) {
            console.log(err);
        }
    }
    try {
        const response = await axiosInstance.get('https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json');
        const responseData = response.data; 
        saveData(responseData);

    } catch (err) {
        console.log(err.message);
    }
}
initData();