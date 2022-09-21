let errors = [];
import { checkEmailExist,findUser,addUser } from './userModelController.js';
import { responseSucccess, responseError } from '../response.js';
import bcrypt from 'bcrypt'
import * as jwt from '../jwt/jwt.js'



export const singup = (async (req,res,next)=>{
        try {
            const {name , lastName,password,confirmPassword,email} = req.body;
            if(!name || !lastName || !password || !confirmPassword ||!email){
                errors.push({message:'all fields are required'}) 
               throw errors
            }
            if(password.legth < 5){
                errors.push({message:'pasword must be more than 5 characters'})
                throw errors
            }
            if(password !=confirmPassword){
                errors.push({message:'paswords doesnt match please try agin'});
                throw errors
            }
           const  response = await checkEmailExist(email)
            
           if(response){
            errors.push({message:'email already exist'});
            throw errors
           }
           const hashed = await  bcrypt.hash(password,10)
           if(!hashed){
            errors.push({message:'internal error'})
            throw errors
           } 
           const newUser = addUser(name,lastName,email,hashed)
           responseSucccess(req,res,200,'User registered successfully, please log in'); 

        } catch (errors) {
            next(errors) 
        }
 

});

export const singin = (async (req,res,next)=>{

    try {
        let errors = [];
        const {email,password} = req.body

        if(!email || !password){
            errors.push({message:'all fields are require'})
            throw errors
        }
    
        const userExist = await findUser(email);
  
        if(!userExist){
            errors.push({message:"user not found please try again"});
            throw errors;
        }

       const passwordMatch = await bcrypt.compare(password,userExist.password)
    
       if(!passwordMatch){
    
        errors.push({message:"password does not match please try again"});
        throw errors
       }
       console.log(userExist.id)
       const token = await jwt.genToken(userExist.id)
       res.status(200).json({token:token})
    } catch (errors) {
        next(errors);
        
    }

});

