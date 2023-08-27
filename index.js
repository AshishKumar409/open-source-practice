const express=require("express")

const app = express()



app.get("/",(req,res)=>{
    let animeName = "JoJo"
    res.send(`<h1>${animeName}</h1>`)
})


app.listen(3000,()=>{
    console.log("listening on port 3000")
})