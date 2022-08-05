// const app = require('../app.js')
// ^ abvoe line in the test file itself.

const add = (num1, num2) => {
    return num1+num2;
}

module.exports = { add }

// module.exports = {} at the end of our app.js file
// require our app.js file in the test file using the require method by const app = require ('../app.js')