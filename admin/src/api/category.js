import axios from 'axios';


const createCategory = async (categoryName) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/category/add_category`,categoryName);
        return response.data;
    } catch (error) {
        return error;
    }
};

const getCategory = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/category/get_all`);
        return response.data;
    } catch (error) {
        return error;
    }
};


export { getCategory, createCategory }