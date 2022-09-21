import  {Usuarios} from "../../schemas/user.js"
import {Post} from "../../schemas/post.js"
import * as jwt from '../jwt/auth.js'
import * as Task from './taskModelcontroller.js'
import { responseSucccess } from "../response.js";


let errors = [];

export async function newTask(req,res,next){
    try {   
        const {title,description} =req.body;
            const newTask = await Task.createTask(req.userId,title,description);

        if(!newTask){
            errors.push({message:'internnal error'});
            throw errors
        }
        
        responseSucccess(req,res,200,{message:'created successfully' ,task:newTask})
    } catch (error) {
       next(error);
    }
}

export async function UpdateTask(req,res,next){
    try {   

        const {title,description} =req.body;
        const {id} = req.params;
       
        const update = await Task.updateTask(id,title,description,req.userId);
        
        if(!update){
            errors.push({message:'internnal error'});
            throw errors
        }
        responseSucccess(req,res,200,{message:'updated  successfully'})
    } catch (error) {
       next(error);
    }
}
export async function getTasks(req,res,next){
    try {
            const userTasks = await Task.getTasks(req.userId)
            responseSucccess(req,res,200,userTasks)
    } catch (error) {
        next(error)
        
    }
}

export async function deleteTask(req,res,next){
    try {
            const {id} = req.params
            const destroyTask = await Task.destroy(id,req.userId);
            if(!destroyTask){
                errors.push({message:'Task not found'});
                throw errors
            }
            responseSucccess(req,res,200,'Deleted successfully');

    } catch (error) {
        next(error)
    }
}