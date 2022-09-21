import { DataTypes } from 'sequelize';

import {connection} from '../db/connection.js';
import { Post } from './post.js';

//modelos
    
export const  Usuarios = connection.define('Usuarios',{

        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        firstName:{
            type:DataTypes.STRING
        },
        lastName:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        }
        
    });


    Usuarios.hasMany(Post);
    Post.belongsTo(Usuarios);






