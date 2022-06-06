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

const handler = {
    log: "",
    main: "0",
};

function selectScreen() {
    const screenString = document.querySelector(".screen");
    return screenString;
}

function selectlogScreen() {
    const screenString = document.querySelector(".screenlog");
    return screenString;
}

function initializeScreen() {
    selectScreen().innerText = handler.main;
}

initializeScreen();

function redirectInput(character) {
    const listOperator = /[+\-\/*]/g;
    const listNumbers = /[0123456789\.]/g;
    const decimal = /[\.]/g;
    let indexOperator = character.search(listOperator);
    let indexNumbers = character.search(listNumbers);
    handler.main.search(decimal)

    console.log(((handler.main).match(decimal)))

    // checks for operands, updates actual screens
    if (indexOperator >= 0) {
        if (handler.log.search(listOperator) >= 0) {
            handler.log = handler.log.slice(0,-1);
            handler.log = handler.main + character;
        }
        else if (handler.log.search(listOperator) < 0) {
            handler.log += handler.main + character;
        }
        //handler.log += handler.main + character;
        selectlogScreen().innerText = handler.log;
    }

    // Remember to include ZERO, decimal behavior
    if (indexNumbers >= 0) {
       if (handler.main.search(decimal) >= 0) {
            if (character >= 0) {
                handler.main += character;
            }
       }
       else if (handler.main.search(decimal) < 0) {
            if (handler.main == 0) {
                if (character >= 0) {
                    handler.main = character;
                }
                if (character == '.') {
                    handler.main += character;
                }
            }
            else if (handler.main > 0) {
                handler.main += character;
            }

       }
        selectScreen().innerText = handler.main;
    }
}


const itemPercent = document.querySelector(".buttonPercent");
itemPercent.addEventListener("click", function() {
    console.log(this)
    redirectInput("%");
})

const itemClearEntry = document.querySelector(".buttonClearEntry");
itemClearEntry.addEventListener("click", function() {
    console.log(this)
    handler.main = "0";
    selectScreen().innerText = handler.main;
})

// Needs to be expanded
const itemClear = document.querySelector(".buttonClear");
itemClear.addEventListener("click", function() {
    console.log(this)
    handler.main = "0";
    handler.log = "";
    selectScreen().innerText = handler.main;
    selectlogScreen().innerText = handler.log;
})

const itemBackspace = document.querySelector(".buttonBackspace");
itemBackspace.addEventListener("click", function() {
    console.log(this)
    if (selectScreen().length > 1) {
        selectScreen().innerText = (selectScreen().innerText).slice(0,-1);
    }
    else {
        selectScreen().innerText = "0";
    }
})

const itemDivide = document.querySelector(".buttonDivide");
itemDivide.addEventListener("click", function() {
    console.log(this)
    //checkOperator((selectScreen()).innerText)
    redirectInput("/");
})

const itemMultiply = document.querySelector(".buttonMultiply");
itemMultiply.addEventListener("click", function() {
    console.log(this)
    //checkOperator((selectScreen()).innerText)
    redirectInput("*");
})

const itemSubtract = document.querySelector(".buttonSubtract");
itemSubtract.addEventListener("click", function() {
    console.log(this)
    //checkOperator((selectScreen()).innerText)
    redirectInput("-");
})

const itemPlus = document.querySelector(".buttonPlus");
itemPlus.addEventListener("click", function() {
    console.log(this)
    //const screenString = document.querySelector(".screen");
    //console.log(screenString.innerText)
    //checkOperator((selectScreen()).innerText)
    redirectInput("+");
})

const itemEqual = document.querySelector(".buttonEqual");
itemEqual.addEventListener("click", function() {
    console.log(this)
    redirectInput("=");
})

// Needs a function, multiply by -1 maybe
const itemPlusMinus = document.querySelector(".buttonPlusMinus");
itemPlusMinus.addEventListener("click", function() {
    console.log(this)
    redirectInput("");
})

const itemDecimal = document.querySelector(".buttonDecimal");
itemDecimal.addEventListener("click", function() {
    console.log(this)
    redirectInput(".");
})


const itemZero = document.querySelector(".buttonZero");
itemZero.addEventListener("click", function() {
    console.log(this)
    redirectInput("0");
})

const itemOne = document.querySelector(".buttonOne");
itemOne.addEventListener("click", function() {
    console.log(this)
    redirectInput("1");
})

const itemTwo = document.querySelector(".buttonTwo");
itemTwo.addEventListener("click", function() {
    console.log(this)
    redirectInput("2");
})

const itemThree = document.querySelector(".buttonThree");
itemThree.addEventListener("click", function() {
    console.log(this)
    redirectInput("3");
})

const itemFour = document.querySelector(".buttonFour");
itemFour.addEventListener("click", function() {
    console.log(this)
    redirectInput("4");
})

const itemFive = document.querySelector(".buttonFive");
itemFive.addEventListener("click", function() {
    console.log(this)
    redirectInput("5");
})

const itemSix = document.querySelector(".buttonSix");
itemSix.addEventListener("click", function() {
    console.log(this)
    redirectInput("6");
})

const itemSeven = document.querySelector(".buttonSeven");
itemSeven.addEventListener("click", function() {
    console.log(this)
    redirectInput("7");
})

const itemEight = document.querySelector(".buttonEight");
itemEight.addEventListener("click", function() {
    console.log(this)
    redirectInput("8");
})

const itemNine = document.querySelector(".buttonNine");
itemNine.addEventListener("click", function() {
    console.log(this)
    redirectInput("9");
})