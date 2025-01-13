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

export{addBook};