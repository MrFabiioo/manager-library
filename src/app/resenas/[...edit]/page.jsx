"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import endPoints from "../../../services/index";
import useAlert from "../../../hooks/useAlert";
import Alert from "../../../Components/alert";
import FormResena from "app/Components/formResena";
import { useUser } from '@auth0/nextjs-auth0/client';
import NotAutoriced from "app/Components/notAutoriced";


export default function Edit() {
  const [review, setReview] = useState({});
  const { alert, setAlert, toggleAlert } = useAlert(); // ✅ Agregar useAlert
  const params = useParams(); 
  const id = Array.isArray(params.edit) ? params.edit[1] : params.edit; 
  const { user, error, isLoading } = useUser();
  //console.log('ID REVIEW: '+id)

 
  useEffect(() => {
    if (!id) return;
    async function getReview() {
      try {
        const response = await axios.get(endPoints.reviews.getReview(id));
        setReview(response.data);
        //console.log("AQUI ESTOY REVIEWS: "+review)
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
    getReview();
  }, [id]);
  if (!user) return <NotAutoriced/>
  return (
    user &&
    <>
      <Alert alert={alert} handleClose={toggleAlert} />
      <div className="flex justify-center items-center">
        <div className="bg-gray-100 p-6 w-3/4 md:w-1/2 lg:w-2/3 rounded-2xl ">
           <FormResena  setAlert={setAlert} review={review} /> 
       </div>
    </div>
      
    </>
  );
}
