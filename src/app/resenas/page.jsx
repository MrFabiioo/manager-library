"use client"

import { CheckIcon,XCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useEffect, useState } from "react";
import Modal from "../../Components/modal";
import Alert from 'app/Components/alert';
import useAlert from '../../hooks/useAlert';
import { deleteReview} from '../../services/review.service'
import FormResena from 'app/Components/formResena';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { getAllReviews } from '../../services/review.service';


export default function Resenas() {
  const [openModal,setOpenModal]= useState(false);
  const [reviews,setReviews]=useState([]);
  const { alert, setAlert, toggleAlert } = useAlert();
  const { user, isLoading } = useUser();
  const router = useRouter()
  
  useEffect(()=>{
    async function getReviews() {
      const response = await getAllReviews();
      setReviews(response);
    }
    try {
      getReviews();
    } catch (error) {
      console.error(error);
    }
  },[])

  const handleDelete = (id) => {
    deleteReview(id).then(()=>{window.location.reload();})
  };
  if (isLoading) {
    return null
  }
  if(!user){
    router.push('/api/auth/login')
  }

  return (
    user &&
    <>
    <Alert alert={alert} handleClose={toggleAlert} />
      <Modal estado={openModal} cambiarEstado={setOpenModal}>
        <FormResena estado={openModal} cambiarEstado={setOpenModal} setAlert={setAlert} />
      </Modal>
      <div className="lg:flex lg:items-center lg:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Lista de Reseñas</h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="sm:ml-3">

          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="font-black px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      imagen | nombre reseña
                    </th>
                    <th scope="col" className="font-black px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nombre libro
                    </th>
                    <th scope="col" className="font-black px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Autor
                    </th>
                    <th scope="col" className="font-black px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Id
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Editar</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Borrar</span>
                    </th>
                    
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {reviews?.map((review) => (
                    <tr key={`Product-item-${review.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={review.book.image} width={200} height={200} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{review.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{review.book.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-200 text-black-800">{review.book.author}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{review.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={`resenas/edit/${review.id}`} className="text-blue-700 hover:text-blue-500 font-bold">
                          Editar 
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <XCircleIcon className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => handleDelete(review?.id)}/>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      

    </>
  );
}
