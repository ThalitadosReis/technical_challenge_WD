const router = require("express").Router();
const phones = require("../data/phones.json");

// GET: Display phone list
router.get("/phones", (req, res) => {
    res.json(phones);
});

// GET: Display details of one specific phone
router.get("/phones/:id", (req, res) => {
    const {id} = req.params;

    const phone = phones.find((element) => {
        element.id === id;
    })
    res.json(phone)
})

module.exports = router;