// Write a simple function that logs ‘Hello Codenation" to the
// console.
// Then write a higher-order function which will run the simple
// function five times, even though you only call it once.
// Hint: Pass the simple function as a parameter, which will
// involve a For loop

const sayHello = () => {
    console.log("Hello Codenation");    
};

const fiveTimes = () => {
    for (let i = 0; i < 4; i++) {
        sayHello(); }
};

sayHello(fiveTimes());
