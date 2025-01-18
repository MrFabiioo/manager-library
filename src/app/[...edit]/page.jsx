"use client";
import FormProduct from "../../Components/formBook";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";  // ✅ Importar useParams
import axios from "axios";
import endPoints from "../../services/index";

export default function Edit() {
  const [book, setBook] = useState({});
  const params = useParams(); // ✅ Obtener los parámetros dinámicos de la URL

  //console.log("PARAMS:", params); // Ver qué valores devuelve useParams

  const id = Array.isArray(params.edit) ? params.edit[1] : params.edit; // ✅ Manejo del array en rutas catch-all

  //console.log("ID:", id);

  useEffect(() => {
    if (!id) return;

    async function getBook() {
      try {
        const response = await axios.get(endPoints.books.getBook(id));
        setBook(response.data);
      } catch (error) {
        console.error(error);
        alert("ID no encontrado");
      }
    }
    getBook();
  }, [id]);

  //console.log(book);

  return <FormProduct book={book} />;
}
