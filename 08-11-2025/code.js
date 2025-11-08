var pressedNum=0;
var register1=0;
var register2=0;
var result=0;
var mathOpPressed=null;
var clearPressed=false;

function getId(elem){
    pressedNum=pressedNum*10+parseInt(elem.id);
    if(!mathOpPressed) register1=pressedNum;
    else register2=pressedNum;
}

function showResult(){
    switch(mathOpPressed){
        case "sum":
            result=register1+register2;
            break;
        case "sub":
            result=register1-register2;
            break;
        case "mult":
            result=register1*register2;
            break;
        case "div":
            if(register2) result=register1/register2;
            else result="Cannot divide by 0"
            break;
        case "pow":
            result=register1**register2;
            break;
        default:
            break;
    }
    
    document.getElementById("result").textContent=result;
    
    pressedNum=0;
    register1=result;
    register2=0;
    mathOpPressed=null;
}

function clear(){
    clearPressed=true;
    pressedNum=0;
    register1=0;
    register2=0;
    result=0;
    mathOpPressed=null;
    document.getElementById("result").textContent = "";
}

function mathOperations(op){
    if(!clearPressed) mathOpPressed=op.id;
    else {
        mathOpPressed=null;
        clearPressed=false;
    }
    pressedNum=0;
}