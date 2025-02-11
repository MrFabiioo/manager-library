"use client"

import { CheckIcon,XCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useEffect, useState } from "react";
import endPoints from "../../services/index";
import axios from "axios";
import Modal from "../../Components/modal";
import FormBook from 'app/Components/formBook';
import Alert from 'app/Components/alert';
import useAlert from '../../hooks/useAlert';
import { deleteCategory } from 'app/services/categories.service';
import FormCategory from 'app/Components/formCategoy';
import { useUser } from '@auth0/nextjs-auth0/client';
import NotAutoriced from "app/Components/notAutoriced";



export default function Categorias() {
    const [openModal,setOpenModal]= useState(false);
    const [categories,setCategories] = useState([]);
    const { alert, setAlert, toggleAlert } = useAlert();
     const { user, error, isLoading } = useUser();

  useEffect(()=>{
    async function getCategories() {
      const response = await axios.get(endPoints.categories.getAllCategories);
      setCategories(response.data);
    }
    try {
      getCategories();
    } catch (error) {
      console.error(error);
    }
  },[])

  const handleDelete = (id) => {
    deleteCategory(id).then(()=>{window.location.reload();})
  };
  if (!user) return <NotAutoriced/>
  return (
    user &&
    <>
    <Alert alert={alert} handleClose={toggleAlert} />
      <Modal estado={openModal} cambiarEstado={setOpenModal}>
        <FormCategory estado={openModal} cambiarEstado={setOpenModal} setAlert={setAlert} ></FormCategory>
      </Modal>
      <div className="lg:flex lg:items-center lg:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Lista de Categorias</h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setOpenModal(!openModal)}
            >
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Agregar Libro
            </button>
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
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    imagen | nombre 
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Desccripción
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Creacion
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                  {categories?.map((category) => (
                    <tr key={`Product-item-${category?.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={category?.image} width={200} height={200} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{category?.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{category?.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-black-800">{category.createdAt}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category?.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={`categorias/edit/${category.id}`} className="text-indigo-600 hover:text-indigo-900">
                          Editar 
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <XCircleIcon className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => handleDelete(category?.id)}/>
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
