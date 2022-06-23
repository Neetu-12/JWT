const express=require("express")
const app=express()
// const rout=express.Router()
const jwt=require("jsonwebtoken")
app.use(express.json())
const add=require("./add")
const {accessToken,createToken}=require('./jwt2')


app.get('/sum',add)


const a=(req,res,next)=>{
    console.log(req.body,'request');
    // next()
    res.send('this is homepage')
}


app.post('/login',((req,res)=>{
    console.log(req.headers);
    const user={id:2}
    // const token=jwt.sign(user,'secrete')
    let token=createToken(user,"secrete")
    res.cookie(token,"token").status(200).send("successfully login")
    // res.json({token:token
    // })
}))


app.get('/home',accessToken,(req,res)=>{
    res.send("home page")
})

app.listen(8000,()=>{
    console.log("listen at port 8000");
})
