const jwt = require("jsonwebtoken");//mengimpor jsonwebtoken untuk memverifikasi token

//middleware untuk memverifikasi JWT token
const authMiddleware = (req,res, next)=> {
    const token = req.header("Authorization")?.split(" ")[1];// mendaptkan oken dari header authorization
    if(!token){
        //jika token tidak ada
        return res.status(401).json({message: "No token, authorization denied"});//kirim respons tidak ada token
    }
    //jika ada token
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);//verifikas token dnean secret
        req.user = decoded;//menyimpan payload token ke req.user
        next();// lanjutkan ke middleware berikutnya
    } catch (error){
        res.status(401).json({message: "Token is not valid"});//kirim respons jika token tidak valid
    }
};

module.exports = authMiddleware;// mengekspor middleware