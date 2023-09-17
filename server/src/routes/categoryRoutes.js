const express = require("express")  
const CategoryControllers = require("../controllers/CategoryControllers")  
const router = express.Router()


router.put("/add_category",CategoryControllers.createCategory)
router.get("/get_all",CategoryControllers.getCategory)


module.exports = router