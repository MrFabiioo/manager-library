import axios from "axios";

const getOneBook = async (id) =>{
    const response = await axios.get(`/api/books/getOneBook?id=${id}`)
    return response.data;
}

const getAllBooks = async ()=>{
    const response = await axios.get("/api/books/getAllBooks"); // Llama a la API local en Next.js
    return response.data;    
}

const addBook = async (bookData)=>{ 
    const response = await axios.post('/api/books/addBook',bookData);
    return response.data
}

const deleteBook =  async(id)=>{   
    const response = await axios.delete(`/api/books/deleteBook?id=${id}`);
    return response.data
};

const updateBook= async (id,bookData)=>{
    const response = await axios.patch(`/api/books/updateBook?id=${id}`,bookData);
    return response.data
};

export{addBook,deleteBook,updateBook,getAllBooks,getOneBook};