const bcrypt = require("bcryptjs");//mengimpor bcryptjs untuk memverifikasi password
const jwt = require("jsonwebtoken"); //mengimpor jsonwebtoken untuk membuat token
const User = require("../models/user"); // mengimpor modul user

//fungsi untuk register pengguna baru
exports.register= async (req,res) => {
    const{ name, email, password, role} = req.body; // mendapatkan data dari body permintaan

    try{
        let user = await User.findOne({email});// mengecek apakah pengguna sudah ada
        if(user){
            return res.status(400).json({message: "User already exists"});//jika ada, krim pesan error
        
        }

        user = new User({name, email, password, role});//membuat pengguna baru dengan data yang diberikan
        await user.save();// menyimpan pengguna baru ke database

        const payload = {userId: user.id, role: user.role};//membuat payload untuk token
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });//membuat jwt token

        res.json({ token });//mengirim token sebgai respons
    } catch (error) {
        res.status(500).json({message: error.message});//mengirim pesan error jika ada
    }
}

    //fungsi untuk login pengguna
    exports.login= async (req,res) => {
        const{email, password} = req.body; //mendapatkan email dan password dari body permintaal
        try{
            const user = await User.findOne({email});// mencari pengguna berdasarkan email
            if(!user){
                //jika pengguna tidak ditemukan
                return res.status(400).json({message: "Invalid email or password"});// krim pesan error
            
            }
    
           const isMatch = await bcrypt.compare(password, user.password);//membandingkan password
           if(!isMatch){
            //jika password tidak cocok
            return res.status(400).json({message:"invalid email or password"});//kirim pesan error
           }

           const payload = {userId: user.id, role: user.role};//membuat payload token dengan ID dan role pengguna
           const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1h",
           });//membuat jwt token

           res.json({ token });//mengirim token sebahai respons
        } catch (error) {
            res.status(500).json({message: error.message});//kirim pesan error jika ada masalah server
        }

};