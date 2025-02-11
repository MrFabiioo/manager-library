"use client"
import FormCategory from "app/Components/formCategoy";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import endPoints from "app/services";
import axios from "axios";
import useAlert from "app/hooks/useAlert";
import Alert from "app/Components/alert";
import { useUser } from '@auth0/nextjs-auth0/client';
import NotAutoriced from "app/Components/notAutoriced";

export default function Edit(){
    const { alert, setAlert, toggleAlert } = useAlert(); // ✅ Agregar useAlert
    const [category,setCategory] = useState([])
    const params = useParams(); 
    const id = Array.isArray(params.edit) ? params.edit[1] : params.edit; 
    const { user, error, isLoading } = useUser();
      
      useEffect(() => {
        if (!id) return;
        async function getCategory() {
          try {
            const response = await axios.get(endPoints.categories.getCategory(id));
            setCategory(response.data);
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
        getCategory();
      }, [id]);
      if (!user) return <NotAutoriced/>
    return(
      user &&
            <>
                <Alert alert={alert} handleClose={toggleAlert} />
                <div className="flex justify-center items-center">
                    <div className="bg-gray-700 p-6 w-3/4 md:w-1/2 lg:w-2/3 rounded-2xl ">
                        <FormCategory setAlert={setAlert} category={category} />
                    </div>
                </div>
            </>
    );
}