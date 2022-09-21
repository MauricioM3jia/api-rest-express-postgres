import { DataTypes } from 'sequelize';

import {connection} from '../db/connection.js';

//modelos

 export const  Post = connection.define('Posts',{

        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type:DataTypes.STRING
        },
        description:{
            type:DataTypes.STRING
        },
        priority:{
                type:DataTypes.STRING
        }

        
    });
