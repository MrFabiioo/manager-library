"use client"

import { CheckIcon,XCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useEffect, useState } from "react";
import Modal from "../../Components/modal";
import FormBook from 'app/Components/formBook';
import Alert from 'app/Components/alert';
import useAlert from '../../hooks/useAlert';
import { deleteBook } from 'app/services/books.service';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import  {getAllBooks}  from 'app/services/books.service';
import { getAllCategories } from 'app/services/categories.service';



export default function Libros(){
  const [openModal,setOpenModal]= useState(false);
  const [books,setBooks]=useState([]);
  const [categories,setCategories] = useState([]);
  const { alert, setAlert, toggleAlert } = useAlert();
  const { user, error, isLoading} = useUser();
  const router = useRouter();
  
  useEffect(()=>{
    async function getBooks() {
      const response = await getAllBooks();
      setBooks(response);
    }
    try {
      getBooks();
      
    } catch (error) {
      console.error(error);
    }
  },[])

  
  useEffect(()=>{
    async function getCategories() {
      const response = await getAllCategories();
      setCategories(response);
    }
    try {
      getCategories();
    } catch (error) {
      console.error(error);
    }
  },[])
  
  const handleDelete = (id) => {
    deleteBook(id).then(()=>{window.location.reload();})
  };
  if (isLoading) {
    return null
  }
  if(!user){
    router.push('/api/auth/login')
  }
  
  if (error) return <div>{error.message}</div>;

  return (
  
    user &&(
      <>
    <Alert alert={alert} handleClose={toggleAlert} />
      <Modal estado={openModal} cambiarEstado={setOpenModal}>
        <FormBook categories={categories} books={books} estado={openModal} cambiarEstado={setOpenModal} setAlert={setAlert} ></FormBook>
      </Modal>
      <div className="lg:flex lg:items-center lg:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Lista de Libros</h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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
                    <th scope="col" className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-black">
                    imagen | nombre 
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-black text-gray-500 uppercase tracking-wider">
                      Categoria
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-black text-gray-500 uppercase tracking-wider">
                      Autor
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-black text-gray-500 uppercase tracking-wider">
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
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-200 text-black-800">{book.author}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          {!book.review ? (
                            <Link href={`resenas/agregar/id/${book.id}`} className="text-blue-700 hover:text-gray-500 font-bold">
                              Agregar Reseña
                            </Link>
                          ) : (
                            <span className="text-gray-400 font-bold">Ya tiene una reseña</span>
                          )}
                        </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={`libros/edit/${book.id}`} className="text-blue-700 hover:text-gray-500 font-bold">
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
    )
    
  );
}

