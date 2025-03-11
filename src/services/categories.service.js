import axios from "axios";

const getOneCategory = async (id) =>{
    const response = await axios.get(`/api/categories/getOneCategory?id=${id}`)
    return response.data;
}

const getAllCategories = async ()=>{
    const response = await axios.get("/api/categories/getAllCategories"); // Llama a la API local en Next.js
    return response.data  
}

const addCategory = async (categoryData)=>{
    const response = await axios.post('/api/categories/addCategory',categoryData);
    return response.data
}

const deleteCategory =  async(id)=>{   
    const response = await axios.delete(`/api/categories/deleteCategory?id=${id}`)
    return response.data
};

const updateCategory= async (id,categoryData)=>{
    const response = await axios.patch(`/api/categories/updateCategory?id=${id}`,categoryData);
    return response.data
};

export{addCategory,deleteCategory,updateCategory,getAllCategories,getOneCategory};