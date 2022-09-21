import { Usuarios } from "../../schemas/user.js";
import { Post } from "../../schemas/post.js";
import { responseError } from "../response.js";


export async function checkEmailExist(email, next) {
  try {
    const emailexist = await Usuarios.findOne({ where: { email: email } });
    return emailexist
  } catch (error) {
    next(error);
  }
}
export async function addUser(name ,lastName,email,hashed,next) {
   try {
        const newUser = await Usuarios.create({firstName:name,lastName:lastName,email:email,password:hashed});
        return newUser;
   } catch (error) {
         next(error);
   }
}

export async function findUser(email,next){
   try {
     const userFound = await Usuarios.findOne({where:{email:email}});
     if(userFound){
      return userFound;
     }
     throw new Error('user not found')
     
      
   } catch (error) {
    console.log(error)
      next(error);
      
   }

}