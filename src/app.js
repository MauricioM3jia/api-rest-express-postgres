import  Express  from "express";
import dotenv from "dotenv"
import {router} from '../src/routes/routes.js'
import { responseError } from "./components/controllers/response.js";
import morgan from 'morgan'
import cors from 'cors'

dotenv.config();


const app = Express();
    app.use(cors())
    app.use(Express.json());
    app.use(morgan('dev'))
    app.use(router);  
    app.use(responseError)
    
export {
    app
}