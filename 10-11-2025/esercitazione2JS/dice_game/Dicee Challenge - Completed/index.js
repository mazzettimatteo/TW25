let randomNum=Math.random() *6 +1;
let randomInt1=Math.floor(randomNum);
console.log(randomInt1);
//DadoCasuale="dice"+randomInt+".png"
//setAttribute(dadoCasuale)
//if p1 batte p2 stampa p1 wins ecc..
let imagePath1="dice"+randomInt1+".png";

randomNum=Math.random() *6 +1;
randomInt2=Math.floor(randomNum);
let imagePath2="dice"+randomInt2+".png";

let image1=document.querySelector(".img1")

image1.setAttribute("src", "images/"+imagePath1);

document.querySelector(".img2").setAttribute("src", "images/"+imagePath2);

if(randomInt1>randomInt2){
    document.querySelector("h1").innerHTML="Player 1 won";
}
else if(randomInt1<randomInt2){
    document.querySelector("h1").innerHTML="Player 2 won";
}
else{
        document.querySelector("h1").innerHTML="Draw";
}