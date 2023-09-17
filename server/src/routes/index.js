
const productRoutes = require("./productRoutes")
const categoryRoutes = require("./categoryRoutes")


const routes = (app) => {
    app.use("/api/product", productRoutes)
    app.use("/api/category", categoryRoutes)
}
module.exports = routes