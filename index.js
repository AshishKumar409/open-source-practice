const express=require("express")

const app = express()



app.get("/",(req,res)=>{

    let animeName = "JoJo's Bizzare Adventure"
    res.send(`<h1>${animeName}</h1>`)
})

app.get("/bleach",(req,res)=>{

    let animeName = "bleach"
    res.send(`<h1>${animeName}</h1>`)
})


app.listen(3000,()=>{
    console.log("listening on port 3000")
})