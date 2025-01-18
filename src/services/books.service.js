import axios from "axios";
import endPoints from ".";

const addBook = async (body)=>{
    const config ={
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
    };
    const response = await axios.post(endPoints.books.addBook,body,config);
    return response.data
}

const deleteBook =  async(id)=>{   
    const response = await axios.delete(endPoints.books.deleteBook(id))
    return response.data
};

const updateBook= async (id,body)=>{
    const config ={
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
    };
    const response = await axios.patch(endPoints.books.updateBook(id),body,config);
    return response.data
};

export{addBook,deleteBook,updateBook};