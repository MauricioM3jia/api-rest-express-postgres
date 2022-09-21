import jwt from "jsonwebtoken";

export async function tokenExist(req, res, next) {
  try {
    const token = req.header("x-access-token");
    if (!token) {
        throw new Error('forbiden')
    }
    const decoded = await jwt.verify(token,process.env.SECRET_KEY)
    if(!decoded){
          throw new Error('invalid Token')
    }
    req.userId = decoded.id
    next();
   
  } catch (error) {
    next(error)
  }
}
