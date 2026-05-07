import jwt from "jsonwebtoken";

// middleware execute before controller function
const userAuth = async(req, res, next)=>{
    const {token} = req.headers;

    if(!token){
        return res.status(401).json({success: false, message : 'Not Authorized. Login Again'})

    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecode.id){
            //gpt
            if(!req.body) req.body={};
            req.body.userId = tokenDecode.id;
        }else{
             return res.status(401).json({success: false, message : 'Not Authorized. Login Again'});
        }

        next();

    } catch (error) {
         return res.status(401).json({success: false, message : error.message});
    }
}



export default userAuth;







