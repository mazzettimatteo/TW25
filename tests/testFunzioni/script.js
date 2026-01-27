let foo=function(x){
    return function(y){
        return y-x
    }
}

fun=foo(3)  //fun è quindi la funzione dove x:=3 e y è il parametro formale
a=fun(5)    //y:=5
console.log(a)

try{
    msg=document.querySelector("#msg")
    msg.innerHTML='<p>VIA!</p>'
    for(i=1;i<=3;i++){
        //funzione anonima passata come argomento attuale ad un'altra funzione(setTimeout(funz,n) che esegue funz() dopo n millisecondi)
        window.setTimeout(function(x){this.innerHTML+='<p>'+x+' sec <strong>passati</strong></p>'}.bind(msg,i), i*1000)
        //bind(obj,args), obj è l'oggetto a cuiverrà associata la funzione(in questo caso obj:=this), args sono gli argomenti che voglio passare alla funzione
    }

}
catch(er){
    console.log("error")
}



let Mazzo={
    Nome: "matteo",
    Cognome: "mazzetti",
    Residenza: {
        Città: "Bologna",
        Quartiere: "Saragozza"
    },
    Genitori: ["Marco","Claudia"],
    Saluta: function(){
        alert("Shao!")
    }
}
console.log(Mazzo)
if(Mazzo.hobby){
    console.log("Mazzo ha hobby")
}
else{
    console.log(Mazzo.hobby == false)
}


let persone=[
    {nome: "Anna", cognome: "Rossi", anni: 20},
    {nome: "Lucio", cognome: "Bruni", anni: 55},
    {nome: "Mirko", cognome: "Alessandrini", anni: 37}
]

pers1=document.getElementById("pers1")
pers1.innerHTML="<p> 1:"+JSON.stringify(persone) +"</p>"

function byCognome(i,j){return i.cognome > j.cognome ? 1 : -1}
persone.sort(byCognome)
pers2=document.getElementById("pers2")
pers2.innerHTML="<p> 2:"+JSON.stringify(persone) +"</p>"

function lt30(persona){return persona.anni <30}
console.log(persone.some(lt30))

//arrow functions: nomeFunz=(params)=>{instruction1; ... instructionN; return result}
//oppure nomeFunz=(params)=>result
//o ancora let val=(params=>result)(x)
var changeAge999=(persona)=>{persona.anni=999}
persone.forEach(changeAge999)
pers3=document.getElementById("pers3")
pers3.innerHTML="<p> 3:"+JSON.stringify(persone) +"</p>"




//CLOSUE SCOPE DELLE FUNZIONI
CounterGOOD=function(){
    var state=0
    return{
        incrementa: function(){return ++state},
        decrementa: function(){return --state}
    }
}
CounterBAD=function(){
    this.state=0
    this.incrementa=function(){
        return ++this.state
    }
    this.decrementa=function(){
        return --this.state
    }
}
//non va bene che si possa accedere a state (che dovrebbe essere privata): m1 != m2-1
var cBAD=new CounterBAD()
cBAD.incrementa()
m1=cBAD.incrementa
cBAD.state=42
m2=cBAD.incrementa

//qui invece fare cGOOD.state:=num non cambia veramente il valore dello stato, dunque: n1 == n2-1 
var cGOOD=new CounterGOOD()
cGOOD.incrementa()
n1=cGOOD.incrementa()
cGOOD.state=24
n2=cGOOD.incrementa()




//Immediatly Invoked Function Expression: sono funzioni anonime create e invocate subito dopo
//servono per fare singoletti(oggetti non ripetibili), dotati di closure 
var animals=(function(){
    var animali=[]
    return{
        add: function(a){animali.push(a)},
        lista: function(){return animali.join(", ")}
    }
})()
//così l'oggetto animals è un singoletto con un array come stato interno, 
//con la variabile animali che risulta non accedibile se non con i metodi add e lista
// le () alla fine invocano la funzione immediatamente

animals.add("Canguro")
animals.add("Tapiro")
animals.add("Scoiattolo")
fattoria=animals.lista()
document.getElementById("anim").innerHTML=fattoria
