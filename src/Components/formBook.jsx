import { useRef, useEffect } from 'react';
import { ValidationSchema } from '../Schema/validationSchema';
import { addBook,updateBook } from 'app/services/books.service';
//import { useRouter } from 'next/router';

export default function FormBook({ book, estado,cambiarEstado, setAlert }) {
  const formRef = useRef(null);
  const handleSubmit = async(event)=>{
    event.preventDefault();
    const formData = new FormData(formRef.current)
    const data ={
      title: formData.get('title'),
      author: formData.get('author'),
      categoryId:formData.get('categoryId'),
      description:formData.get('description'),
      image:formData.get('image')
    };
    try {
      const valid = await ValidationSchema.validate(data);
      console.log(valid);
    } catch (error) {
      setAlert({
        active: true,
        message: error.message,
        type: 'error',
        autoClose: true,
      })
    }

    if (book) {
      console.log(book.id)
      updateBook(book?.id,data);
      alert('Libro actualizado');
    } else {
      addBook(data);
      cambiarEstado(!estado);
    }

    
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit} className='w-full'>
      <div className="overflow-hidden">
        <div className="px-4 py-5 bg-white sm:p-6 ">
          <div className="grid grid-cols-6 gap-6 ">
            <div className="col-span-6 sm:col-span-6 ">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                defaultValue={book?.title}
                type="text"
                name="title"
                id="title"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Autor
              </label>
              <input
                defaultValue={book?.author}
                type="text"
                name="author"
                id="author"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Categoria
              </label>
              <select
                defaultValue={book?.categoryId}
                id="categoryId"
                name="categoryId"
                autoComplete="category-name"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="1">Novelas de prueba</option>
                <option value="2">Novelas de prueba 1</option>
                <option value="3">Novelas de prueba 2</option>
                <option value="4">Novelas de prueba 3</option>
                <option value="5">Novelas de prueba 4</option>
                <option value="6">Novelas de prueba 5</option>
              </select>
            </div>

            <div className="col-span-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Descripcion
              </label>
              <textarea
                defaultValue={book?.description}
                name="description"
                id="description"
                autoComplete="description"
                rows="5"
                className="form-textarea mt-1 block w-full mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Imagen
              </label>
              <textarea
                defaultValue={book?.image}
                name="image"
                id="image"
                autoComplete="image"
                rows="3"
                className="form-textarea mt-1 block w-full mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
}
