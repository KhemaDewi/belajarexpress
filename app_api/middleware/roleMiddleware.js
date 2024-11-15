//middleware/rolemiddleware.js

//middleware untuk memeriksa peran pengguna
const rolemiddleware= (requiredRole)=>{
    return(req,res,next)=>{
        if (req.user && req.user.role === requiredRole){
            //jika pengguna memiliki role yang sesuai
            next(); // lanjutkan ke middleware berikutnya
        } else {
            //jika tidak memiliki role yang sesuai
            res.status(403).json({message:"Acces denied"});//kirim respons akses ditolak
        }
    };
};

module.exports = rolemiddleware; //mengekspor middleware