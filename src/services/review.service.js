import axios from "axios";
import endPoints from ".";

const addReview= async (body)=>{
    const config ={
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
    };
    const response = await axios.post(endPoints.reviews.addReview,body,config);
    return response.data
}

const deleteReview =  async(id)=>{   
    const response = await axios.delete(endPoints.reviews.deleteReview(id))
    return response.data
};

const updateReview= async (id,body)=>{
    const config ={
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
    };
    const response = await axios.patch(endPoints.reviews.updateReview(id),body,config);
    return response.data
};

export{addReview,deleteReview,updateReview};