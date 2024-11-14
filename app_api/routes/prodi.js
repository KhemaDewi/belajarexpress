const express = require("express");

const router= express.Router();

const prodiController = require("../controllers/prodiController");

router.get("/", prodiController.getAllprodi);
router.post("/", prodiController.createprodi);
router.get("/:id", prodiController.getprodiById);
router.put("/:id", prodiController.updateprodi);
router.delete("/:id", prodiController.deleteprodi);

module.exports = router;