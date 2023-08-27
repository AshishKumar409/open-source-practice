const express=require("express")

const app = express()



app.get("/",(req,res)=>{
    let name = "JoJo"
    res.send(`<h1>${name}</h1>`)
})


app.listen(3000,()=>{
    console.log("listening on port 3000")
})