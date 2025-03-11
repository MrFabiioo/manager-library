"use client"
import FormResena from "app/Components/formResena";
import { useParams,useRouter } from "next/navigation";
import { useUser } from '@auth0/nextjs-auth0/client';
import useAlert from '../../../../hooks/useAlert'
import Alert from "app/Components/alert";

export default function Agregar(){
    const router = useRouter()
    const { user, isLoading } = useUser();
    const { alert, setAlert, toggleAlert } = useAlert();
    const params = useParams(); 
    const id = Array.isArray(params.id) ? params.id[1] : params.id; 
    if (isLoading) {
        return null
      }
      if(!user){
        router.push('/api/auth/login')
      }

    return (
        user&&
        <>
        <Alert alert={alert} handleClose={toggleAlert} />
        <FormResena setAlert={setAlert} id={id} />
        </>
    );
}