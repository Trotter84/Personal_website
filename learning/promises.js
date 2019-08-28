
// 1. why promises

const fs = require("fs");

const copyPackageJson = () => {
    readFileAsync("../package.jso")
        .then(fileBuffer => writeFileAsync("./package.json.copy", fileBuffer))
        .then(() => {
            console.log("copied!");
        })
        .catch(err => {
            console.log(err);
        })
}

copyPackageJson();

async
aw

// 3. chaining
// 4. error handling




// 2. creating promises

// like fs.readFile, but it returns a promise
function readFileAsync(fileName) {

    // have to make the promise
    return new Promise((resolve, reject) => {

        // call the old callback-based API
        fs.readFile(fileName, (err, buffer) => {
            // if it failed, reject the outer promise we created
            if (err) {
                reject(err);
            }
            // if it succeeded, resolve the outer promise we created
            resolve(buffer);
        });

    })
}

// like fs.writeFile, but it returns a promise
function writeFileAsync(fileName, data) {

    // have to make the promise
    return new Promise((resolve, reject) => {

        // call the old callback-based API
        fs.writeFile(fileName, data, (err, buffer) => {
            // if it failed, reject the outer promise we created
            if (err) {
                reject(err);
            }
            // if it succeeded, resolve the outer promise we created
            resolve(buffer);
        });

    })
}



// 5. async