"use client";
import FormProduct from "../../../Components/formBook";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import endPoints from "../../../services/index";
import useAlert from "../../../hooks/useAlert";
import Alert from "../../../Components/alert";





export default function Edit() {
  const [book, setBook] = useState({});
  const [categories,setCategories] = useState([]);
  const { alert, setAlert, toggleAlert } = useAlert(); // ✅ Agregar useAlert
  const params = useParams(); 
  const id = Array.isArray(params.edit) ? params.edit[1] : params.edit; 


  useEffect(()=>{
    async function getCategories() {
      const response = await axios.get(endPoints.categories.getAllCategories);
      setCategories(response.data);
    }
    try {
      getCategories();
    } catch (error) {
      console.error(error);
    }
  },[])

  useEffect(() => {
    if (!id) return;
    async function getBook() {
      try {
        const response = await axios.get(endPoints.books.getBook(id));
        setBook(response.data);
      } catch (error) {
        console.error(error);
        setAlert({
          active: true,
          message: "ID no encontrado",
          type: "error",
          book:"",
          autoClose: true,
        });
      }
    }
    getBook();
  }, [id]);

  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert} />    
      <div className="flex justify-center items-center">
        <div className="bg-gray-700 p-6 w-3/4 md:w-1/2 lg:w-2/3 rounded-2xl ">
            <FormProduct categories={categories}  book={book} setAlert={setAlert} alert={alert} toggleAlert={toggleAlert} />
       </div>
    </div>
      
    </>
  );
}
