/****
 ****** ALL FUNCTION BELOW NOT WORK WITH DECIMAL VALUE and NOT WORK WITH NEGATIVE VALUE(-1)!!! 
*****/

function infixToPostfix(infixStr) {

  var postfixStr = "";
  var stack = [];
  // loop through all infix string 
  for (var i = 0; i < infixStr.length; i++) {

    //check of it is operand or not
    if (isOperand(infixStr[i])) {
      postfixStr += infixStr[i];
    }
    else if (precedence(infixStr[i]) > 0){ //check isOperator and return value of Operator

    	if(precedence(stack[stack.length - 1]) > precedence(infixStr[i])){
    		// Put in string
    		postfixStr += stack.pop();
        if(precedence(stack[stack.length - 1]) == precedence(infixStr[i])){
          // Put in string
          postfixStr += stack.pop();
          stack.push(infixStr[i]);
        }
      }
    	else {
        stack.push(infixStr[i]);
      }
    }
    else if (infixStr[i] === "(") {
    	stack.push(infixStr[i]);
    }else if (infixStr[i] === ")" && stack.indexOf("(") != -1) {

    	while (stack.length) {
    		if (stack[stack.length - 1] === "(" || stack.length == 0) {
          stack.pop();
    			break;
    		}
    		else {
    			postfixStr += stack.pop();
    		}
    	}
    }	
  }

  while (stack.length != 0) {
  	if(stack[stack.length - 1] == ")" || stack[stack.length - 1] == "("){
  		stack.pop();
  	}else{
  		postfixStr += stack.pop();
  	}
  	
  }
  return postfixStr;
}

function isOperand (OperandCheck) {
	return ((OperandCheck >= "a" && OperandCheck <= "z") || 
					(OperandCheck >= "A" && OperandCheck <= "Z") || 
					(OperandCheck >= 1 && OperandCheck <= 9) ||
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


console.log(infixToPostfix('(A * B) + (C / D)'));
console.log(infixToPostfix('1 + 2')); // '1 2 +'
console.log(infixToPostfix('(a + b) - (c + d)'));
console.log(infixToPostfix('((3 * 4) / (2 + 5)) * (3 + 4)')); // '3 4 * 2 5 + / 3 4 + *'
console.log(infixToPostfix('((57 - 34) * (6 / 32)) + 43'));
console.log(infixToPostfix('4+8*6-5/3-2*2+2'));//