
import { Sequelize } from "sequelize";
import config from './config.js'


// production it will be config.config.production
   
 export const  connection = new Sequelize(config.config.development);
    connection.authenticate();

   








   

 


 
    

