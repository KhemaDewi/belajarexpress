const axios = require("axios");

const index = async (req, res) => {
    try{

        const response = await axios.get(
            "https://crud-express-seven.vercel.app/api/prodi"
        );
        const prodi = response.data;

        res.render("prodi", {
            title: "Halaman Prodi",
            prodi,
            layout: "main",
        });

    } catch (error) {

        console.error(error.message);
        res.status(500).send("Gagal mendapatkan data prodi dari API");
    }
};

module.exports = {index};