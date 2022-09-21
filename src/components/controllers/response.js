import  Express  from "express";


export  function responseSucccess(req,res,status,message){
            const body = message;
            const errors =[];
            res.status(status).json(body)
}
export function responseError(err,req,res,next){
        console.log(err)
        res.status(400).json(err);
}