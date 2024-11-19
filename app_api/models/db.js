const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://khemadewi2226240083:7ZXgynuJ6ggp4EVZ@cluster0.symwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
            // "mongodb://localhost:27017/mdpsi5a"
        );
        console.log("mongoDB Connected...");
    } catch (error){
        console.error("MongoDB connection error:", error);

        process.exit(1);
    }
    };

    module.exports = connectDB;