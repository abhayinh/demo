const express =require("express")

const app=express()

app.get("/mul",function(req,res){
    const a=req.query.a
    const b=req.query.b
    const result=a*b
    res.send("The multiplation is "+result)
})
app.listen(3000)


app.get("/add",function(req,res){
    const a= req.query.a
    const b=req.query.b

    const add=a+b

    res.send("addition is the "+add)
})

app.get("/devide",function(req,res){
    const a=req.query.a
    const b=req.query.b

    const devide=a/b

    res.send("The devide is "+devide)

})


app.get("/sub",function(req,res){
    const a=req.query.a
    const b=req.query.b

    const sub=a-b
    res.send("The subtract is "+sub)
})