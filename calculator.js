// Operator functions for 2 given values
add = (num1, num2) => {return num1 + num2;}
subtract = (num1, num2) => {return num1 - num2;}
multiply = (num1, num2) => {return num1 * num2;}
divide = (num1, num2) => {if (num2 == 0) return "CANT DIVIDE BY ZERO"; return num1 / num2;}
fraction = (num1) => {return 1 / num1};
square = (num1) => {return num1 ** 2};
squareRoot = (num1) => {return Math.sqrt(num1)};
equals = (num1, num2) => {return }

// Picks appropriate operator function from given operator character
function selectOperation(operator, num1, num2) {
    num1 % 1 ? num1 = parseFloat(num1) : num1 = parseInt(num1);
    num2 % 1 ? num2 = parseFloat(num2)  : num2 = parseInt(num2);
    let temp = 0;
    switch (operator) {
        case '+': 
            temp = add(num1, num2);
            break;
        case '-': 
            temp = subtract(num1,num2);
            break;
        case '*': 
            temp = multiply(num1,num2);
            break;
        case '/': 
            temp = divide(num1,num2);
            break;
        case '=': 
            temp = equals(num1,num2);
            break;
    }

    temp % 1 ? temp = temp.toFixed(2) : temp = temp;
    return temp;
}

const handler = {
    log: "",
    main: "0",
    flagInitial: 0,
    flagRecent: 0,
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
    const listOperator = /[+\-\/*=]/g;
    const listNumbers = /[0123456789]/g;
    const decimal = /[\.]/g;
    const equalSign = /[=]/g;
    let indexOperator = character.search(listOperator);
    let indexNumbers = character.search(listNumbers);
    //handler.main.search(decimal)

    

    // checks for operands, updates actual screens
    if (indexOperator >= 0) {
        let firstOperatorPos = handler.log.search(listOperator);
        let removeFirstOperator = handler.log.slice(firstOperatorPos,firstOperatorPos + 1);
        console.log("Removing 1st Operator: " + handler.log.slice(firstOperatorPos,firstOperatorPos + 1))
        if (handler.log.search(listOperator) >= 0) {
            if (character != "=") {
                if (handler.log.slice(-1) == "=") {
                    //handler.main = "0";
                    handler.log = handler.main + character;
                    handler.flagInitial = 1;
                    selectlogScreen().innerText = handler.log;
                }
                else if (removeFirstOperator >= 0) {
                    handler.flagInitial = 1;

                } // needs condition for 2 + 2 + + +, can't add itself
                else if (!handler.flagRecent) {
                    console.log("ln 73: " + handler.log.slice(-1))
                    console.log("ln 74: " + handler.log.slice(0,-1))
                    console.log("ln 75: " + handler.main)
                    handler.flagInitial = 1;
                    handler.flagRecent = 1;
                    handler.main = selectOperation(handler.log.slice(-1), handler.log.slice(0,-1), handler.main)
                }
            
                handler.log = handler.log.slice(0,-1);
                
            }
            console.log("operator position: " + handler.log.search(listOperator))
            
            
            
            
            if (character == "=" && handler.log.match(equalSign) === null) {
                handler.flagInitial = 0;
                let tempLog = handler.log + handler.main + character;
                handler.main = selectOperation(handler.log.slice(-1), handler.log.slice(0,-1), handler.main);
                handler.log = tempLog;
                selectScreen().innerText = handler.main;
            } 
            else {
                if (character == "=") {
                    handler.flagInitial = 0;
                    handler.flagEquals = 1;
                    let tempLog = handler.log;
                    console.log("Slicing: " + tempLog.slice(firstOperatorPos,-2))
                    console.log("Slicing2: " + tempLog.slice(firstOperatorPos+1, -1))
                    handler.main = selectOperation(handler.log.slice(firstOperatorPos,firstOperatorPos + 1), handler.log.slice(firstOperatorPos+1,-1), handler.main);
                    handler.log = handler.main + tempLog.slice(firstOperatorPos);
                    selectScreen().innerText = handler.main;
                }
                else {
                    handler.log = handler.main + character;
                }

            }
            
        }
        else if (handler.log.search(listOperator) < 0) {
            handler.log += handler.main + character;
            handler.flagInitial = 1;
        }
        //handler.log += handler.main + character;
        selectlogScreen().innerText = handler.log;
        console.log(handler.log.slice(-1))
        console.log(handler.log.slice(0,-1))
    }

    

    // Remember to include ZERO, decimal behavior
    if (indexNumbers >= 0) {
            
//        if (!handler.flagInitial) {
            if (handler.log.slice(-1) == "=") {
                //handler.main = "0";
                handler.log = "";
                handler.flagInitial = 1;
                handler.main = character;
                selectlogScreen().innerText = handler.log;
            }
            if (!((toString(handler.main)).search(decimal) === undefined)) {
                if ((toString(handler.main)).search(decimal) >= 0) {
                    if (character >= 0) {
                        handler.main += character;
                        handler.flagInitial = 0;
                    }
                }
                else if ((toString(handler.main)).search(decimal) < 0) {
                    console.log(handler.main)
                    console.log(toString(handler.main))
                    console.log((toString(handler.main)).search(decimal))
                    console.log(!isNaN(handler.main))
                    if (handler.main == 0) {
                        if (character >= 0) {
                            handler.main = character;
                            handler.flagInitial = 0;
                        }
                    }
                    else if (!isNaN(handler.main)) {
                        if (handler.flagInitial) {
                            handler.main = character;
                            handler.flagInitial = 0;
                            handler.flagRecent = 0;
                        }
                        // else if (!handler.flagEquals) {
    
                        // }
                        else {
                            handler.main += character;
                        }
                    }
               }            
            }
           else {
            handler.main += character;
           }
           
        //}
       
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
    handler.flagInitial = 0;
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
    if (handler.main.search(/[.]/g) < 0) {
        handler.main += ".";
        selectScreen().innerText = handler.main;
    }
    console.log("did not")
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