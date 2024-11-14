const axios = require("axios");

const index = async (req, res) => {
    try{

        const response = await axios.get(
            "https://crud-express-seven.vercel.app/api/fakultas"
        );
        const fakultas = response.data;

        res.render("fakultas", {
            title: "Halaman Fakultas",
            fakultas,
            layout: "main",
        });

    } catch (error) {

        console.error(error.message);
        res.status(500).send("Gagal mendapatkan data fakultas dari API");
    }
};

module.exports = {index};