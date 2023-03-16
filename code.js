// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === undefined) {
        return "Hello, World!";
    } else if (input === true){
        return "Hello, World!";
    } else if (input === false){
        return "Hello, World!";
    } else {
        return "Hello, " + (input) + "!";
    }
}

function isFive(somenum){
    return (somenum === 5)
}

function isEven(number){
    return parseInt(number) % 2 === 0
}

function isVowel(letter){
    return letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U" || letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u";
}

function add(num1, num2) {
    if (isNaN(num1) || isNaN(num2)){
        return "NaN"
    } else {
        return parseInt(num1) + parseInt(num2);
    }
}
