// Example: ensure username exists in request body.


const express =require("express")


const app=express()
app.use(express.json());

// middleware

function middleware(req,res,next){
    if(!req.body.username){
        return res.status(400).send("Username is required !!!")
    }
    next()
}

app.use(middleware)

app.post("/createuser",function(req,res){
    res.send(`user with this name  ${req.body.username} is created successfull`)
})



app.listen(3000)














// create the middleware 
// that get the what is the request (get,post,etc)
// get the path of requested
// get the all date and time 



// const express =require("express")

// const app=express()

// function middleware(req,res,next){
//     console.log(`${req.method} ${req.url} at ${new Date().toISOString() }`)
//     next()

// }


// // Counter middleware

// let counter=0

// function countermiddleware(req,res,next){
//     counter=counter+1
//     console.log(`You access the route ${counter} This many times`)
//     next()

// }

// app.use(middleware)
// app.use(countermiddleware)

// app.get("/:a/:b",function(req,res){
    
//     const a=parseInt(req.params.a)
//     const b=parseInt(req.params.b)

//     const summ=a+b

//     res.send(`The sum is ${summ}`)

// })




// app.listen(3000)
















// ###########################################################

// so when we sending the request of any port we get the number 
// of request that we  send the all post 
//  counting the request that can done by middleware 



// const express =require("express")

// const app=express()


// let counter=0

// function middleware(req,res,next){
//     counter=counter+1
//     console.log("Total number of request is ",counter)
//     next(); 
// }



// app.use(middleware)

// app.get("/",function(req,res){
//     const a=parseInt(req.query.a)
//     const b=parseInt(req.query.b)

//     const summ=a+b
//     res.send("The ans is "+summ)
// })



// app.get("/add",function(req,res){
//     const a=parseInt(req.query.a)
//     const b=parseInt(req.query.b)

//     const summ=a-b
//     res.send("The ans is "+summ)
// })




// app.listen(3000)





// #############################################################################

// to count the upcoimg request we the  use same counter function again and again so we create the 
// middleware for that so that can track thw  count the all request that are coming that the main use
// middleware


// const express=require("express")

// const app=express()

// let counter=0

// app.get('/add',function(req,res){
 
//     counter=counter+1
//     console.log(`You request to add route is ${counter}`)

//     const a=parseInt(req.query.a)
//     const b=parseInt(req.query.b)

//     const summ=a+b
//     res.send("The sum is "+summ)
// })


// app.listen(3000)



// let count=0

// app.get('/sub',function(req,res){
 
//     counter=counter+1
//     console.log(`You request to add route is ${counter}`)

//     const a=parseInt(req.query.a)
//     const b=parseInt(req.query.b)

//     const summ=a-b
//     res.send("The sum is "+summ)
// })


// app.listen(3000)