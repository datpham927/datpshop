import axios from 'axios';


const createProduct = async (body) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/product/add_product`, body);
        return response.data;
    } catch (error) {
        return error;
    }
};

const editProduct = async (body) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/product/edit_product`, body);
        return response.data;
    } catch (error) {
        return error;
    }
};
const getProductByCategory = async ({ category_code }) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/product/get_all?category_code=${category_code}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export { getProductByCategory, createProduct,editProduct }