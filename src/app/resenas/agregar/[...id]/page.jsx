"use client"
import FormResena from "app/Components/formResena";
import { useParams } from "next/navigation";
import { useUser } from '@auth0/nextjs-auth0/client';
import NotAutoriced from "app/Components/notAutoriced";
export default function Agregar(){
    const { user, error, isLoading } = useUser();
    const params = useParams(); 
    const id = Array.isArray(params.id) ? params.id[1] : params.id; 
    //console.log("console de id: "+id)
    if (!user) return <NotAutoriced/>
    return (
        user&&
        <>

        <FormResena id={id} />
        </>
    );
}