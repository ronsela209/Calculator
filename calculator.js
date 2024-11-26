function add(firstNum , secondNum){
    let result = firstNum + secondNum;
    console.log("add result= " + result)
    return result;
    }

function substract(firstNum , secondNum){
    let result = firstNum - secondNum;
    console.log("substract result= " + result)

    return result;
    }

function multiply(firstNum , secondNum){
    let result = firstNum * secondNum;
    console.log("multiply result= " + result)

    return result;
    }

function divide(firstNum , secondNum){
    let result = firstNum / secondNum;
    console.log("divide result= " + result)

    return result;
    }

    function operate(firstNum, operator, secondNum){

        if(operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/'){

            return "Unexaptable operator";
        }
        else{

            switch(operator){
                case '+' :
                    add(firstNum, secondNum)
                    break;
                case '-' :
                    substract(firstNum, secondNum)
                    break;
                case '+' :
                    multiply(firstNum, secondNum)
                    break;
                case '/' :
                    divide(firstNum, secondNum)
                    break;


            }
        }

    }

//let testOne = parseInt(prompt("Enter first Num"));
//let testSecond = parseInt(prompt("Enter second Num"));
//add(testOne, testSecond);
//substract(testOne, testSecond);
//multiply(testOne, testSecond);
//divide(testOne, testSecond);