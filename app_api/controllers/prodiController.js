const Prodi = require("../models/prodi");
const getAllprodi = async (req, res) => {
    try {
        const prodi = await prodi.find().populate("fakultas_id","nama singkatan");

        res.status(200).json(prodi);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getprodiById = async (req, res) => {
    try {
        const prodi = await prodi.findById(req.params.id);
        if (!prodi)
            return res.status(404).json({message: "prodi not found"});

        res.status(200).json(prodi);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const createprodi = async (req, res) => {
    const prodi = new prodi({
        nama: req.body.nama,
        singkatan: req.body.singkatan,
        fakultas_id: req.body.fakultas_id,
    })
    try {
        const newprodi = await prodi.save();

        res.status(200).json(newprodi);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

const updateprodi = async (req, res) => {
    try {
        const prodi = await prodi.findById(req.params.id);

        if (!prodi)
            return res.status(404).json({ message: "prodi not found" });

        if (req.body.nama != null){
            prodi.singkatan = req.body.singkatan;
        }
        if(req.body.singkatan !=null){
            prodi.singkatan = req.body.singkatan;
        }
        if(req.body.fakultas_id !=null){
            prodi.fakultas_id = req.body.fakultas_id;
        }
        const updateprodi = await prodi.save();

        res.status(200).json(updateprodi);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

const deleteprodi = async (req, res) => {
    try {
        const prodi = await prodi.findById(req.params.id);

        if (!prodi)
            return res.status(404).json({ message: "prodi not found" });

        await prodi.deleteOne();
        res.status(200).json({message: "prodi deleted"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

module.exports = {
    getAllprodi,
    createprodi,
    getprodiById,
    updateprodi,
    deleteprodi,
};