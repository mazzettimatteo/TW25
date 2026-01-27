function Cane(nome,taglia,razza){
    this.nome=nome
    this.taglia=taglia
    this.razza=razza
    this.abbaia=()=>"Wof Wof"
}

mila=new Cane("Mila","Media","labrador")
peppe=new Cane("Peppe","media","Carlino")

console.log(peppe.abbaia())

//i prototipi permettono di modificare la definizione dei costruttori aggiungendo nuovi metodi
Cane.prototype.dormi=()=>console.log("zzz...")
peppe.dormi()

//posso modificare i prototipi anche delle classi native di JS
String.prototype.mm_endsWith=function(suffisso){
    return this.substr(-1*suffisso.length)==suffisso;
}
let a="file.pdf"
if(a.mm_endsWith(".txt")){
    console.log(a+" is a .txt file")
}
else if(a.mm_endsWith(".pdf")){
    console.log(a+" is a .pdf file")
}


class Gatto{
    constructor(nome,colore){
        this.nome=nome 
        this.colore=colore
    }
    miagola=()=>console.log("Meow")
}

sherry=new Gatto("sherry", "rosa")
sherry.miagola() 


//Optional chaining, se ho un'array di oggetti, alcuni che hanno un campo, altri che non lo hanno
let famiglia=[
    {
        nome: "Marco",
        ruolo: "papà",
        genitori: {
            nonna: "Tosca",
            nonno: "Nevio"
        }
    },
    {
        nome: "Claudia",
        ruolo: "mamma"
    }
]
//posso provare a fare così
try{
    for(pers in famiglia){
        console.log(famiglia[pers].genitori.nonna)
    }
}
catch(er){
    console.log("manca un campo")
}
//oppure più brevemente
for(pers in famiglia){
        console.log(famiglia[pers]?.genitori?.nonna)
    }


//operatore di SPREAD ... serve per:
//concatenare array, meglio del + perché il + fa casting
x1=[1,2,3]
x2=[6,5,4]
x3=[...x1,...x2]
x4=x1+x2
console.log(x3)
console.log(x4)
//unire o clonare oggetti
matte={nome: "Matteo", cognome: "Mazzetti"}
matteEXPANDED={...matte, anni: 20}
matteCLONED={...matte}
console.log(matte)
console.log(matteEXPANDED)
console.log(matteCLONED)
//spalmare un iterabile tra gli argomenti di una funzione
matteARRAY=["Matteo", "Mazzetti"]
fullName=(name, surname)=>name + " " + surname
matteFULLNAME=fullName(...matteARRAY)
console.log(matteARRAY)
console.log(matteFULLNAME)