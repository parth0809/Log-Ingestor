const express=require('express')
const router=express.Router();
const Log=require('../schemas/log.schema')

router.get('/',async (req,res)=>{
    
    let x=req.cookies.ind;
   var logs=await Log.find({}).skip(0).limit(100);
   var number=await Log.countDocuments({})
   res.render("index",{
    data:logs
   })
});

router.post('/',async (req,res)=>{
    var filter={};
    if(req.body.level!="")
    filter.level=req.body.level;
   if(req.body.message!="")
    filter.message=req.body.message;
     if(req.body.resourceId!="")
    filter.resourceId=req.body.resourceId;
     if(req.body.traceId!="")
    filter.traceId=req.body.traceId;
     if(req.body.spanId!="")
    filter.spanId=req.body.spanId;
     if(req.body.metaData!="")
     {
        var metadata={parentResourceId:req.body.metaData};
        filter.metadata=metadata
     }
     if(req.body.commit!="")
    filter.commit=req.body.commit;
    var timeStamp1=req.body.TimeStamp1;
    var timeStamp2=req.body.TimeStamp2;
    if(timeStamp1!='' && timeStamp2=='')
    timeStamp2=timeStamp1;
    if (timeStamp1=='')
    {
        var logs=await Log.find(filter).skip(0).limit(100);
    }
    else
    {
        console.log(timeStamp1);
        console.log(timeStamp2);
        var logs=await Log.find({
            $and:
                [
                    filter,
                    {
                        timestamp:{
                            $gte:timeStamp1,
                        $lte:timeStamp2}
                    }

                ]
        }
           )
    }
    res.render('index',{
        data:logs
    });
})


module.exports=router;

