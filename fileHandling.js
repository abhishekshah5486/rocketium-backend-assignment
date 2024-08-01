const fs = require('fs');
const path = require('path');

// const data = fs.readFileSync('file.txt');
// console.log(data.toString());

// fs.writeFileSync("file.txt", "This is Abhishek. An AI ML enthusiast.", 'utf-8', (err) => {
//     console.log('File modified');
// })

// // append to a file
// fs.appendFileSync('file.txt', '\nThank you for your love and support❤️', 'utf-8', (err) => {
//     if (err) {
//         console.log('Error appending file.');
//     }
//     else console.log('File has been appended.');
// })

// fs.mkdir('dir1', (err) => {
//     if (err) return "Error creating directory";
//     return "Directory has been created successfully.";
// })

// Remove the directory
// fs.rmdir('./dir1', (err)=>{
//     console.log('Directory has been deleted.');
// })

// Rename the file.txt to new-file.txt
// fs.renameSync('./file.txt', './new-file.txt', (err) => {
//     if (err) console.log(err);
//     console.log('File renamed successfully.');
// })

// const p = "/Users/abhishekshah/rocketium-backend-assignment/index.js";
// const dir = path.dirname(p);
// const ext = path.extname(p);
// console.log(dir);
// console.log(ext);

// Move file.txt to ./dir1/file.txt

// try {
//     fs.renameSync('./new-file.txt', './dir1/file.txt');
//     console.log('File has been moved to dir1.');
// } catch (err) {
//     console.log(err);    
// }

// Another method to move a file
//  Copy the file from one location to another and unlink from initial

const sourcePath = "./dir1/file.txt";
const destinationPath = "../";

fs.copyFile(sourcePath, destinationPath, (err) => {
    if (err) console.log(err);
    console.log('File copied successfully.');
    fs.unlink('./dir1/file.txt', (err) => {
        if (err) console.log(err);
        console.log('File has been moved successfully.');
    })
})

