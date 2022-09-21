import jwt from "jsonwebtoken"
import { responseError } from "../response.js";

export const genToken =(async (id, next) => {
        try {
          const token = await jwt.sign({id}, process.env.SECRET_KEY, {
            expiresIn: 60 * 60 * 24 * 7,
          });
        
        return token;
        } catch (error) {
          next(error);
        }
      });



