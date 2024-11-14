const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb://feliciacalista18:123456feli@cluster0-shard-00-00.nffh2.mongodb.net:27017,cluster0-shard-00-01.nffh2.mongodb.net:27017,cluster0-shard-00-02.nffh2.mongodb.net:27017/?ssl=true&replicaSet=atlas-q2tt7s-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("mongoDB Connected...");
    } catch (error){
        console.error("MongoDB connection error:", error);

        process.exit(1);
    }
    };

    module.exports = connectDB;