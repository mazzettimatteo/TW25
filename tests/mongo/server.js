const express = require('express')
const app = express()
const cors = require('cors')

const Student=require("./database.js")
const routes=require("./routes.js")

app.use(express.json())
app.use(cors())

app.use("/api/students", routes) //server per dire che tutte le rotte in "routes" iniziano con /api/students

const PORT=3000
app.listen(PORT,()=>{
    console.log(`Server is online: http://localhost:${PORT}`)
})