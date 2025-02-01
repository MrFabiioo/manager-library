"use client"
import FormResena from "app/Components/formResena";
import { useParams } from "next/navigation";

export default function Agregar(){
    
    const params = useParams(); 
    const id = Array.isArray(params.id) ? params.id[1] : params.id; 
    //console.log("console de id: "+id)
    return (
        <>

        <FormResena id={id} />
        </>
    );
}