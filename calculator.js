// Operator functions for 2 given values
add = (num1, num2) => {return num1 + num2;}
subtract = (num1, num2) => {return num1 - num2;}
multiply = (num1, num2) => {return num1 * num2;}
divide = (num1, num2) => {return num1 / num2;}
fraction = (num1) => {return 1 / num1};
square = (num1) => {return num1 ** 2};
squareRoot = (num1) => {return Math.sqrt(num1)};

// Picks appropriate operator function from given operator character
function selectOperation(operator, num1, num2) {
    switch (operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1,num2);
        case '*': return multiply(num1,num2);
        case '/': return divide(num1,num2);
    }
}

function screen(string = "") {
    //remove function probably needed

    //let checkDot = string.search(/[.]/g);
    console.log(typeof string)
    const screenString = document.querySelector(".screen");
    let currentText = screenString.innerText;
    let tempString = currentText;

    tempString += string;
    if (string == 0 && currentText == 0) {
        tempString = 0; 
        //console.log("here")
    }
    // else if(checkDot && currentText == 0) {
    //     tempString += string;
    //     //console.log("here next")
    // }
    else if(string != 0 && currentText == 0) {
        const listOperator = /[+-/*]/g;
        let  convertToString = string.toString();
        console.log(convertToString.search(listOperator))
        if (convertToString.search(listOperator) >= 0) {
            currentText += string;
            tempString = currentText;
        }
        else {
            tempString = string;
        } 
    }

    screenString.innerText = tempString;
    //console.log(screenString.innerText)
}

function selectScreen() {
    const screenString = document.querySelector(".screen");
    return screenString;
}

function checkOperator(string) {
    const listOperator = /[%+-/*=]/g;
    let indexOperator = string.search(listOperator);
    let flagNegative = 1;
    console.log(string)
    console.log(indexOperator)

    if (string[0] == "-") {
        string = string.slice(1);
        indexOperator = (string.search(listOperator));
        flagNegative = 1 * -1;
        console.log("ABOVE TEST: " + string)
        console.log("TEST: " + indexOperator)
    }

    if (indexOperator >= 0) {
        let operandOne = parseInt(string.slice(0,indexOperator)) * flagNegative;
        let operandTwo = parseInt(string.slice(indexOperator+1));
        console.log(operandOne)
        console.log(operandTwo)
        let operator = string[indexOperator];
        console.log(operator)
        let clearScreen = selectScreen();
        

        let result = selectOperation(operator,operandOne,operandTwo);
        if (result == 0) {
            
            clearScreen.innerText = "";
            screen("0");
            
        }
        else if (result != 0) {
            clearScreen.innerText = "";
            screen(result);
        }
    }
}

const itemPercent = document.querySelector(".buttonPercent");
itemPercent.addEventListener("click", function() {
    console.log(this)
    screen("%");
})

const itemClearEntry = document.querySelector(".buttonClearEntry");
itemClearEntry.addEventListener("click", function() {
    console.log(this)
    const screenString = document.querySelector(".screen");
    screenString.innerText = "";
})

// Needs to be expanded
const itemClear = document.querySelector(".buttonClear");
itemClear.addEventListener("click", function() {
    console.log(this)
    //screen("2");
})

const itemBackspace = document.querySelector(".buttonBackspace");
itemBackspace.addEventListener("click", function() {
    const screenString = document.querySelector(".screen");
    screenString.innerText = (screenString.innerText).slice(0,-1);
})

const itemDivide = document.querySelector(".buttonDivide");
itemDivide.addEventListener("click", function() {
    console.log(this)
    checkOperator((selectScreen()).innerText)
    screen("÷");
})

const itemMultiply = document.querySelector(".buttonMultiply");
itemMultiply.addEventListener("click", function() {
    console.log(this)
    checkOperator((selectScreen()).innerText)
    screen("×");
})

const itemSubtract = document.querySelector(".buttonSubtract");
itemSubtract.addEventListener("click", function() {
    console.log(this)
    checkOperator((selectScreen()).innerText)
    screen("-");
})

const itemPlus = document.querySelector(".buttonPlus");
itemPlus.addEventListener("click", function() {
    console.log(this)
    //const screenString = document.querySelector(".screen");
    //console.log(screenString.innerText)
    checkOperator((selectScreen()).innerText)
    screen("+");
})

const itemEqual = document.querySelector(".buttonEqual");
itemEqual.addEventListener("click", function() {
    console.log(this)
    screen("=");
})

// Needs a function, multiply by -1 maybe
const itemPlusMinus = document.querySelector(".buttonPlusMinus");
itemPlusMinus.addEventListener("click", function() {
    console.log(this)
    screen("");
})

const itemDecimal = document.querySelector(".buttonDecimal");
itemDecimal.addEventListener("click", function() {
    console.log(this)
    screen(".");
})


const itemZero = document.querySelector(".buttonZero");
itemZero.addEventListener("click", function() {
    console.log(this)
    screen("0");
})

const itemOne = document.querySelector(".buttonOne");
itemOne.addEventListener("click", function() {
    console.log(this)
    screen("1");
})

const itemTwo = document.querySelector(".buttonTwo");
itemTwo.addEventListener("click", function() {
    console.log(this)
    screen("2");
})

const itemThree = document.querySelector(".buttonThree");
itemThree.addEventListener("click", function() {
    console.log(this)
    screen("3");
})

const itemFour = document.querySelector(".buttonFour");
itemFour.addEventListener("click", function() {
    console.log(this)
    screen("4");
})

const itemFive = document.querySelector(".buttonFive");
itemFive.addEventListener("click", function() {
    console.log(this)
    screen("5");
})

const itemSix = document.querySelector(".buttonSix");
itemSix.addEventListener("click", function() {
    console.log(this)
    screen("6");
})

const itemSeven = document.querySelector(".buttonSeven");
itemSeven.addEventListener("click", function() {
    console.log(this)
    screen("7");
})

const itemEight = document.querySelector(".buttonEight");
itemEight.addEventListener("click", function() {
    console.log(this)
    screen("8");
})

const itemNine = document.querySelector(".buttonNine");
itemNine.addEventListener("click", function() {
    console.log(this)
    screen("9");
})