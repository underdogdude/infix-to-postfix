/****
 ****** ALL FUNCTION BELOW NOT WORK WITH DECIMAL VALUE and NOT WORK WITH NEGATIVE VALUE(-1)!!! 
*****/
'use strict';

function infixToPostfix(infixStr) {
  var infixStr = infixStr.replace(/ /g,'') ? infixStr : '';
  var postfixStr = "";
  var stack = [];
  // loop through all infix string 
  for (var i = 0; i < infixStr.length; i++) {
    //check of it is operand or not
    if (isOperand(infixStr[i])) {
      postfixStr += infixStr[i];
    }
    else if (precedence(infixStr[i]) > 0){ //check isOperator and return value of Operator

    	while (stack.length != 0 && (precedence(stack[stack.length - 1])) >= precedence(infixStr[i])) {
        postfixStr += stack.pop();
      }
      stack.push(infixStr[i]);
    }
    else if (infixStr[i] === "(") {
    	stack.push(infixStr[i]);
    }else if (infixStr[i] === ")") {
      var topStack = stack.pop();

    	while (topStack != "(") {
        postfixStr += topStack;
        topStack = stack.pop();
    	}
    }	
  }
  while (stack.length != 0) {
  	postfixStr += stack.pop();
  }
  return postfixStr;
}

function isOperand (OperandCheck) {
	return ((OperandCheck >= "a" && OperandCheck <= "z") || 
					(OperandCheck >= "A" && OperandCheck <= "Z") || 
					(OperandCheck >= 0 && OperandCheck <= 9) ||
					// @,# this is optional for Config EEE project
					(OperandCheck == "@") || 
					(OperandCheck == "#"));
}

function precedence (ch){
  switch(ch){
    case '+' : 
    case '-' : 
        return 1;
    case '*' : 
    case '/' : 
        return 2;
    case '^' : 
        return 3;
    default :
        return -1;
  }
}

// export for testing
if (typeof exports !== 'undefined'){ exports.infixToPostfix = infixToPostfix }