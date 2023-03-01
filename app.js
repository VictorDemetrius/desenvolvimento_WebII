const express = require("express")
const app = express()

app.get("/",function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/produto/:item/:malido", function(req,res){
    res.send("Item: "+ req.params.item + "<br><h1>MALIDO MEU VOCÊ LAPALIGA</h1>" + req.params.malido)
})

app.get("/contato", function(req,res){
    res.send("<h1>LAPALIGA</h1>")
})


app.listen(8081, function(){
    console.log("BLASILELA PILANHA")
})
