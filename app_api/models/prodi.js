const mongoose = require("mongoose");

const prodiSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
        trim: true,
    },
    singkatan: {
        type: String,
        required: true,
        trim: true,
    },
    fakultas_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Fakultas",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Prodi = mongoose.model("Prodi", prodiSchema);

module.exports = Prodi;