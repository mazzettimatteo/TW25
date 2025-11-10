/*let carName="Volvo";
let x = 5;
let y=10;
document.getElementById("demo").innerHTML=x+y;
let z=x+y;
alert(z);
console.log(z);
let firstName="John", lastName="Doe", age=35;

var xx=true;
if(xx){
 for(var i=1;i<10;i++)  console.log(i);
}
else if(z<=100){
;
}
else{
    ;
}*/

function es1(){//fibonacci
    n=document.getElementById("leleleInput").value;
    let output=[];
    if(n==1) output.push(0);
    else if(n==2) {
        output.push(0);
        output.push(1);
    }
    else{
        output=[0,1];
        for(i=2;i<n;i++){
            output[i]=output[i-1]+output[i-2];
        }
    }
    document.getElementById("demo").innerHTML=output;
}

//querySelector(".containers") ritorna il primo elemento della classe containers
//altrimenti uso querySelectorAll(".conatiners")

//setAttribute se voglio ad esempio cambiare il campo src di un immagine:
// <img src="/photos/gatti/sherry" id="immagine">
// document.getElementByID("immagine")
// setAttribute("src", photos/cani/mila)

//addEventListener("a", miaFunz) che esegue miaFunz una volta compiuta l'azione a