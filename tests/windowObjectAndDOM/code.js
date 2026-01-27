
function foo(){
    let features = "width=300,height=300,left=100,top=100";
    win=window.open("", "BLANK", features)
    try{
        
        win.document.body.innerHTML="<h1>Header 1</h1><p>Another paragraph</p>"
        win.moveBy(8000,35)
        win.resizeTo(50,500)

    }
    catch(er){
        console.log(er)
    }
    
}



str=document.getElementById("ciao")
str.innerHTML="pizza"





allDivs=document.getElementsByName("myDiv")
x=allDivs[0]
newH=document.createElement("h3")
text=document.createTextNode("shao sono mazzo")
newH.appendChild(text)
x.appendChild(newH)




b=str.innerHTML
c=str.outerHTML

console.log(b)
console.log(c)