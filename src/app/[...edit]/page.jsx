"use client";
import FormProduct from "../../Components/formBook";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import endPoints from "../../services/index";
import useAlert from "../../hooks/useAlert";
import Alert from "../../Components/alert";
import Link from 'next/link';

export default function Edit() {
  const [book, setBook] = useState({});
  const { alert, setAlert, toggleAlert } = useAlert(); // ✅ Agregar useAlert
  const params = useParams(); 

  const id = Array.isArray(params.edit) ? params.edit[1] : params.edit; 

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
      <Link href={"./../"} >
      <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Atras
            </button>
      </Link>
      
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-300 p-6 w-3/4 md:w-1/2 lg:w-2/3 rounded-2xl ">
            <FormProduct book={book} setAlert={setAlert} alert={alert} toggleAlert={toggleAlert} />
       </div>
    </div>
      
    </>
  );
}
