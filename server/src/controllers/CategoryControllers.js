const Category = require("../models/Category")
const autoCode = require("../utils/autoCode")


const createCategory = async (req, res) => {
    try {
        const { category_name, category_thumbnail } = req.body
        if (!category_name) {
            return res.status(400).json({
                success: false,
            })
        }

        const category_code = autoCode(category_name)
        const category = await Category.create({ category_name, category_code, category_thumbnail })
        return res.status(201).json({
            success: category ? true : false,
            data: category ? category : null,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


const getCategory = async (req, res) => {
    try {
        const category = await Category.find()
        return res.status(201).json({
            success: category ? true : false,
            data: category ? category : null,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}



module.exports = { createCategory, getCategory }