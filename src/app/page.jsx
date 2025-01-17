"use client"

import { CheckIcon,XCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useEffect, useState } from "react";
import endPoints from "../services/index";
import axios from "axios";
import Modal from "../Components/modal";
import FormBook from 'app/Components/formBook';
import Alert from 'app/Components/alert';
import useAlert from '../hooks/useAlert';
import { deleteBook } from 'app/services/books.service';


export default function Home() {
  const [openModal,setOpenModal]= useState(false);
  const [books,setBooks]=useState([]);
  const { alert, setAlert, toggleAlert } = useAlert();
  
  useEffect(()=>{
    async function getBooks() {
      const response = await axios.get(endPoints.books.getAllBooks);
      setBooks(response.data);
    }
    try {
      getBooks();
    } catch (error) {
      console.error(error);
    }
  },[])
  //console.log(endPoints.books.getAllBooks)

  const handleDelete = (id) => {
    deleteBook(id).then(() => {
      setAlert({
        active: true,
        message: 'Libro Eliminado',
        type: 'error',
        autoClose: true,
      });
    });
    setTimeout(() => {
      window.location.reload();
    }, 7001);
    
  };
  return (
    <>
    <Alert alert={alert} handleClose={toggleAlert} />
      <Modal estado={openModal} cambiarEstado={setOpenModal}>
        <FormBook estado={openModal} cambiarEstado={setOpenModal} setAlert={setAlert}></FormBook>
      </Modal>
      <div className="lg:flex lg:items-center lg:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Lista de Libros</h2>
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
                      Nombre
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categoria
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Autor
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
                  {books?.map((book) => (
                    <tr key={`Product-item-${book.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={book.image} width={200} height={200} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{book.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{book.category.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-black-800">{book.author}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={`/edit/${book.id}`} className="text-indigo-600 hover:text-indigo-900">
                          Agregar Reseña
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={`/edit/${book.id}`} className="text-indigo-600 hover:text-indigo-900">
                          Editar
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <XCircleIcon className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => handleDelete(book?.id)}/>
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
