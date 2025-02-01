import { useRef } from 'react';
import { ValidationSchema } from '../Schema/validationSchema';
import { addBook,updateBook } from 'app/services/books.service';
import { useRouter } from 'next/navigation';
import { Description } from '@headlessui/react';

export default function FormCategory({category}) {
    const formRef = useRef(null);
    const router = useRouter();
    const handleSubmit = async(event)=>{
        event.preventDefault();
        const formData = new FormData(formRef.current)
        const data = {
            name: formData.get('name'),
            description: formData.get('description'),
            image:formData.get('image')
        }
    }
  return (
    <form ref={formRef} onSubmit={handleSubmit} className='w-full '>
      <div className="overflow-hidden rounded-2xl ">
        <div className="px-4 py-5 bg-white sm:p-6 ">
          <div className="grid grid-cols-6 gap-6 ">
            <div className="col-span-6 sm:col-span-6 ">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                defaultValue={category?.name}
                type="text"
                name="name"
                id="name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Descripcion
              </label>
              <textarea
                defaultValue={category?.description}
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
                defaultValue={category?.image}
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
