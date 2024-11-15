const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb://khemadewi2226240083:khemadewi2226240083@cluster0-shard-00-00.symwr.mongodb.net:27017,cluster0-shard-00-01.symwr.mongodb.net:27017,cluster0-shard-00-02.symwr.mongodb.net:27017/?ssl=true&replicaSet=atlas-kk54v2-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("mongoDB Connected...");
    } catch (error){
        console.error("MongoDB connection error:", error);

        process.exit(1);
    }
    };

    module.exports = connectDB;