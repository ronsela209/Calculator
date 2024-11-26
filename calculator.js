let calculatorElements = document.querySelectorAll('.num');
let signElements = document.querySelectorAll('.sign');

let clickedDisplay = document.getElementById('clicked-display');
let clear = document.getElementById('clear');
let equal = document.getElementById('equal')
let firstValue = "";
let operatorValue = "";
let operatorCount = 0;
let secondValue = "";
let deleteBtn = document.getElementById('delete');

deleteBtn.addEventListener('click' , () => {

    if((firstValue) && (secondValue)){
        secondValue = secondValue.slice(0,-1)
        clickedDisplay.textContent = secondValue;
    }
    else if((firstValue) && operatorValue === ""){
        firstValue = firstValue.slice(0,-1)
        clickedDisplay.textContent = firstValue;      

    }
    
})

clear.addEventListener('click', clearInput);
equal.addEventListener('click', () => {

    if((firstValue) && (secondValue) && (secondValue !== "0") && operatorCount >= 0){

        operate(parseFloat(firstValue), operatorValue, parseFloat(secondValue));
        
    }
    else if(secondValue === "0"){

        alert ("Cant divide in 0,calculator values cleared");
        clearInput();
    }
    else{

        alert("Please use the calculator as 2 numbers and operator")
        clearInput();
    }
})


calculatorElements.forEach(element => {
    element.addEventListener('click', ()=> {
        console.log(element)
        
        
        if(operatorCount===0){
            if(element.textContent === "." && firstValue.includes(".")){
                return;

            }

            firstValue += element.textContent
            clickedDisplay.textContent += element.textContent;
             console.log("first value= " + firstValue);
        }
        else if(operatorCount >= 1){
            if(element.textContent === "." && secondValue.includes(".")){
                return;

            }
            console.log("operator bigger than 1")
            if(!secondValue){
                console.log("secondValue");
                clickedDisplay.textContent = "";
                clickedDisplay.textContent += element.textContent;
                secondValue += element.textContent;


            }
            else{
                console.log(secondValue);
                secondValue += element.textContent;
                clickedDisplay.textContent += element.textContent;

            }
             console.log("second value= " + secondValue);
            }     
        
        }
    )
});


signElements.forEach(sign => {
    sign.addEventListener('click', () => {
        if((firstValue) && (secondValue) && (secondValue !== "0") && operatorCount >= 0) {
        
        firstValue = operate(parseFloat(firstValue), operatorValue, parseFloat(secondValue))
        secondValue = "";
            }
            else if(secondValue === "0"){

                alert ("Cant divide in 0,calculator values cleared");
                clearInput();
            }
        operatorValue = sign.textContent;
        console.log("operator value= " + operatorValue);

     operatorCount++;    
    })
})
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
        let operateResult = ""
        if(operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/'){
            
            return "Unexaptable operator";
        }
        else{
            console.log("equal function")
            switch(operator){
                case '+' :
                    
                    operateResult =  add(firstNum, secondNum);
                    clickedDisplay.textContent = Math.floor(operateResult * 100) / 100;
                    return operateResult
                    
                case '-' :
                    operateResult = substract(firstNum, secondNum)
                    clickedDisplay.textContent = Math.floor(operateResult * 100) / 100;
                    return operateResult
                    
                case '*' :
                    operateResult = multiply(firstNum, secondNum)
                    clickedDisplay.textContent = Math.floor(operateResult * 100) / 100;
                    return operateResult
                    
                case '/' :
                    operateResult = divide(firstNum, secondNum)
                    clickedDisplay.textContent = Math.floor(operateResult * 100) / 100;
                    return operateResult

                    


            }
        }

    }
function clearInput(){
     clickesCounter = 0;
     firstValue = "";
     operatorValue = "";
     secondValue = "";
     operatorCount = 0;    
     clickedDisplay.textContent = "";

}

document.addEventListener('keydown', (event) => {
    const key = event.key; // e.g., "1", "+", "Enter"
    calculatorElements.forEach(element => {

        if(element.textContent === key){
            element.click();
        }

    })
    signElements.forEach(element => {

        if(element.textContent === key){
            element.click();
        }

    })
    if(key === 'Enter'){

        equal.click()
    }
    // Find the button with a matching attribute or class
    
    
});

