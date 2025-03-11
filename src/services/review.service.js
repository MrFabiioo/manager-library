import axios from "axios";

const getOneReview = async (id) =>{
    const response = await axios.get(`/api/reviews/getOneReview?id=${id}`)
    return response.data;
}
const getAllReviews = async ()=>{
    const response = await axios.get("/api/reviews/getAllReviews"); // Llama a la API local en Next.js
    return response.data;  
}

const addReview= async (reviewData)=>{
    const response = await axios.post('/api/reviews/addReview',reviewData);
    return response.data
}

const deleteReview=  async(id)=>{   
    const response = await axios.delete(`/api/reviews/deleteReview?id=${id}`);
    return response.data
};

const updateReview= async (id,reviewData)=>{
    const response = await axios.patch(`/api/reviews/updateReview?id=${id}`,reviewData);
    return response.data
};

export{addReview,deleteReview,updateReview,getAllReviews,getOneReview};