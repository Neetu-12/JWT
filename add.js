var add=(req,res,next)=>{
    return res.send({a:req.body.a+req.body.b})
}
module.exports=add