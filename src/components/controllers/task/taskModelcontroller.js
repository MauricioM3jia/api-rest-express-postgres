
import { Post } from "../../schemas/post.js";
import * as jwt from "../jwt/auth.js";


export async function createTask(id, title, description) {
  try {
    const newTask = await Post.create({
      title: title,
      description: description,
      UsuarioId: id,
    });
    if (!newTask) {
      return false
    }
    return newTask;
  } catch (error) {
    return error;
  }
}

export async function updateTask(id, title, description,userId) {
  try {
    const response = await Post.update({title:title,description:description},{where:{id:id,UsuarioId:userId}});
    return response         
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getTasks(userId) {
    try {
        const tasks = await Post.findAll({where:{UsuarioId:userId}});
        
        return tasks
    } catch (error) {
      return error
    }

}
export async function destroy(id,userId){

    try {
      
      const taskdelete = await Post.destroy({where:{id:id,UsuarioId:userId}});
      console.log(taskdelete);
      if(!taskdelete){

         return false
      }
       return taskdelete;

     
    } catch (error) {
      console.log(error)
      return error
      
    }
 

}


