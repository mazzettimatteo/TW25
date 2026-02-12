express=require("express")
app=express()
path=require("path")


app.use("/images", express.static('images'))
app.use(express.static("public"))

app.listen(3000, ()=>{
    console.log("Server online a http://localhost:3000") 
})
