//Design Part
var containerDiv = createDivWithId('container');
var headingDiv = document.createElement('div');

headingDiv.className= 'heading';
document.body.append(headingDiv);

var titleHeading = document.createElement('h1');
titleHeading.id = 'title';
titleHeading.innerText = 'Calculator';

var descriptionPara = document.createElement('p');
descriptionPara.id = 'description';
descriptionPara.innerText = 'The Calculator using Html, CSS, and JavaScript that perform functions of Addition, Multiplication, Subtraction, Division and Modulus operations using DOM element with responsive';

var calculatorDiv = createDivWithId('calculator');

var resultWindowDiv = createDivWithId('result-window');

var historyDiv = createDivWithId('history');

var historyPara = document.createElement('p');
historyPara.id = 'history-value';

var outputDiv = document.createElement('div');
outputDiv.className = 'output';
outputDiv.id = 'output';
document.body.append(outputDiv);

var resultInput = document.createElement('input');
resultInput.setAttribute("id","result")
document.body.append(resultInput);

var KeyboardDiv = createDivWithId('keyboard');

var clearButton = createButtonWithClassAndId('operator','clear','C');
var backSpaceButton = createButtonWithClassAndId('operator','backspace','⌫');
var modulusButton = createButtonWithClassAndId('operator','modulus','%');
var divideButton = createButtonWithClassAndId('operator','divide','&#247;');
var numberSevenButton = createButtonWithClassAndId('number','7','7');
var numberEightButton = createButtonWithClassAndId('number','8','8');
var numberNineButton = createButtonWithClassAndId('number','9','9');
var multiplyButton = createButtonWithClassAndId('operator','multiple','&times;');
var numberFourButton = createButtonWithClassAndId('number','4','4');
var numberFiveButton = createButtonWithClassAndId('number','5','5');
var numberSixButton = createButtonWithClassAndId('number','6','6');
var subtractButton = createButtonWithClassAndId('operator','subtract','-');
var numberOneButton = createButtonWithClassAndId('number','1','1');
var numberTwoButton = createButtonWithClassAndId('number','2','2');
var numberThreeButton = createButtonWithClassAndId('number','3','3');
var addButton = createButtonWithClassAndId('operator','add','+');
var numbeZeroButton =  createButtonWithClassAndId('number','0','0');
var numbedoubleZeroButton =  createButtonWithClassAndId('number','00','00');
var dotButton = createButtonWithClassAndId('dot','dot','.');
var equalButton = createButtonWithClassAndId('operator','equal','=');

headingDiv.appendChild(titleHeading);
headingDiv.appendChild(descriptionPara);

calculatorDiv.appendChild(resultWindowDiv);
calculatorDiv.appendChild(KeyboardDiv);

resultWindowDiv.appendChild(historyDiv);
historyDiv.appendChild(historyPara);

resultWindowDiv.appendChild(outputDiv);
outputDiv.appendChild(resultInput);

KeyboardDiv.appendChild(clearButton);
KeyboardDiv.appendChild(backSpaceButton);
KeyboardDiv.appendChild(modulusButton);
KeyboardDiv.appendChild(divideButton);
KeyboardDiv.appendChild(numberSevenButton);
KeyboardDiv.appendChild(numberEightButton);
KeyboardDiv.appendChild(numberNineButton);
KeyboardDiv.appendChild(multiplyButton);
KeyboardDiv.appendChild(numberFourButton);
KeyboardDiv.appendChild(numberFiveButton);
KeyboardDiv.appendChild(numberSixButton);
KeyboardDiv.appendChild(subtractButton);
KeyboardDiv.appendChild(numberOneButton);
KeyboardDiv.appendChild(numberTwoButton);
KeyboardDiv.appendChild(numberThreeButton);
KeyboardDiv.appendChild(addButton);
KeyboardDiv.appendChild(numbeZeroButton);
KeyboardDiv.appendChild(numbedoubleZeroButton);
KeyboardDiv.appendChild(dotButton);
KeyboardDiv.appendChild(equalButton);

containerDiv.appendChild(headingDiv);
containerDiv.appendChild(calculatorDiv);

function createDivWithId(IdValue) {
    var divElement = document.createElement('div');
    divElement.id=(IdValue);
    document.body.append(divElement);
    return divElement;
}

function createButtonWithClassAndId(className,IdValue,content){
    var buttonElement = document.createElement('button');
    buttonElement.className = (className);
    buttonElement.id = (IdValue);
    buttonElement.innerHTML= content;
    document.body.append(buttonElement);
    return buttonElement;
}

//Functional Part
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ 
			output=output+this.id;
			printOutput(output);
		}
	}); 
}

function onKeyDown(event) {
    const key = event.key;
    const numbers = "0123456789.";
    
    if (numbers.includes(key)) {
      var output = reverseNumberFormat(getOutput());
      if (!isNaN(output)) {
        output += key;
        printOutput(output);
      }
      }else{
        alert("Only Numbers are allowed");
      }
  }
  
  document.addEventListener('keydown', onKeyDown);

var addOperator = document.getElementById("add");
        addOperator.addEventListener('click', function(){
            var output = getOutput();
            var history = getHistory();
            
            if(output != "" || history != ""){
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output + '+';
                printHistory(history);
                printOutput("");
            }
});

var subOperator = document.getElementById("subtract");
        subOperator.addEventListener('click', function(){
            var output = getOutput();
            var history = getHistory();
            
            if(output != "" || history != ""){
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output + '-';
                printHistory(history);
                printOutput("");
            }
});

var multipleOperator = document.getElementById("multiple");
        multipleOperator.addEventListener('click', function(){
            var output = getOutput();
            var history = getHistory();

            if(output != "" || history != ""){
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output + '*';
                printHistory(history);
                printOutput("");
            }
});

var divideOperator = document.getElementById("divide");
    divideOperator.addEventListener('click', function(){
            var output = getOutput();
            var history = getHistory();

            if(output != "" || history != ""){
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output + '/';
                printHistory(history);
                printOutput("");
            }
});

var modulusOperator = document.getElementById("modulus");
        modulusOperator.addEventListener('click', function(){
            var output = getOutput();
            var history = getHistory();

            if(output != "" || history != ""){
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output + '%';
                printHistory(history);
                printOutput("");
            }
});

var dotOperator = document.getElementById("dot");
    dotOperator.addEventListener('click', function(){
            var output = getOutput();
            var history = getHistory();

            if(output != "" || history != ""){
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output + '.';
                printHistory(history);
                printOutput("");
            }
});

var equalOperator = document.getElementById("equal");
        equalOperator.addEventListener('click', function(){
            var output = getOutput();
            var history = getHistory();

            if(output != "" && history != ""){
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output;
                var results = eval(history);
                printOutput(results);
                printHistory("");
            }
});

var backspaceOperator = document.getElementById("backspace");
        backspaceOperator.addEventListener('click', function(){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){
                output = output.substring(0, output.length - 1);
                printOutput(output);
            }
});

var clearOperator = document.getElementById("clear");
        clearOperator.addEventListener('click', function(){
            printHistory("");
            printOutput("");
});


function getHistory(){
	return document.getElementById("history-value").innerText;
}

function printHistory(num){
	document.getElementById("history-value").innerText=num;
}

function getOutput(){
	return document.getElementById("result").value;
}

function printOutput(num){
	if(num==""){
		document.getElementById("result").value = num;
	}
	else{
		document.getElementById("result").value = getFormattedNumber(num);
	}	
}

function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}

function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
  
