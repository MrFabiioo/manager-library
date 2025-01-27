"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import endPoints from "../../../services/index";
import useAlert from "../../../hooks/useAlert";
import Alert from "../../../Components/alert";
import FormResena from "app/Components/formResena";


export default function Edit() {
  const [review, setReview] = useState({});
  const { alert, setAlert, toggleAlert } = useAlert(); // ✅ Agregar useAlert
  const params = useParams(); 
  const id = Array.isArray(params.edit) ? params.edit[1] : params.edit; 
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

  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert} />


      
      <div className="flex justify-center items-center">
        <div className="bg-gray-100 p-6 w-3/4 md:w-1/2 lg:w-2/3 rounded-2xl ">
           <FormResena review={review} /> 
       </div>
    </div>
      
    </>
  );
}
