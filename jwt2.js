const jwt=require('jsonwebtoken')

const accessToken=(neetu,res,suraj)=>{
// console.log(neetu.headers);
if(!neetu.headers.cookie){
   return res.send('login first')
}
let token=neetu.headers.cookie.split("=")[0]
// console.log(token);
let varify=jwt.verify(token,'secrete')
console.log(varify);
if(token){
    suraj()
}
else{
    res.send("invalid token")
}
}

const createToken=(user,key)=>{
    return jwt.sign(user,key)
}

module.exports={accessToken,createToken}

