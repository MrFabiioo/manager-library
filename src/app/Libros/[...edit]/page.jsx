"use client";
import FormProduct from "../../../Components/formBook";
import React, { useEffect, useState } from "react";
import { useParams,useRouter } from "next/navigation";
import useAlert from "../../../hooks/useAlert";
import Alert from "../../../Components/alert";
import { useUser } from '@auth0/nextjs-auth0/client';
import {getAllCategories} from "app/services/categories.service";
import {getOneBook} from "app/services/books.service";
import NotAutoriced from "app/Components/notAutoriced";




export default function Edit() {
  const [book, setBook] = useState({});
  const [categories,setCategories] = useState([]);
  const { alert, setAlert, toggleAlert } = useAlert(); // ✅ Agregar useAlert
  const { user, error, isLoading } = useUser();
  const router = useRouter()
  const params = useParams(); 
  const id = Array.isArray(params.edit) ? params.edit[1] : params.edit; 


  useEffect(()=>{
    if (!id) return;
    async function getCategories() {
      const response = await getAllCategories();
      setCategories(response);
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
        const response = await getOneBook(id);
        setBook(response);
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
  if(isLoading) return null;
  if(!user){
    router.push('/api/auth/login')
  }

  return (
    user && (
      <>
      <Alert alert={alert} handleClose={toggleAlert} />    
      <div className="flex justify-center items-center">
        <div className="bg-gray-700 p-6 w-3/4 md:w-1/2 lg:w-2/3 rounded-2xl ">
            <FormProduct categories={categories}  book={book} setAlert={setAlert} alert={alert} toggleAlert={toggleAlert} />
       </div>
    </div>
      
    </>
    )

  );
}
