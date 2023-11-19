const express=require('express')
const router=express.Router();
const  Log=require('../schemas/log.schema')



router.post('/',async (req,res)=>{
    
    var doc=new Log({
        level:req.body.level,
        message:req.body.message,
        resourceId:req.body.resourceId,
        timestamp:new Date(req.body.timestamp),
        traceId:req.body.traceId,
        spanId:req.body.spanId,
        commit:req.body.commit,
        metadata:req.body.metadata
    })
    await doc.save().then(savedDoc=>{
    });
    res.redirect("/");
});


module.exports=router;