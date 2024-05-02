const fs = require('fs');
const Data = require('../model/data')

// Path to your JSON file
const jsonFilePath = 'C:/Users/Shiva/Desktop/Dashboard/data/jsondata.json';

// Read the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }
    
    // Parse JSON data
    const jsonData = JSON.parse(data);
    // console.log(jsonData);

    // Now proceed to database insertion
    for (i of jsonData){
        Data.create(i);
        // console.log(i);
    }
});