"use client"
import { ValidationSchemaAddBook } from 'app/Schema/validationSchema';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { addReview,updateReview } from 'app/services/review.service';


export default function FormResena({review, id, setAlert}){

  const formRef = useRef(null);
  const router = useRouter();
  const handleSubmit = async(event)=>{
    event.preventDefault();
    const formData= new FormData(formRef.current)
    const data ={
      title:formData.get('title'),
      aboutAuthor:formData.get('aboutAuthor'),
      introduction:formData.get('introduction'),
      review:formData.get('review'),
      conclusion:formData.get('conclusion'),
      criticism:formData.get('criticism'),
      authorImage:formData.get('authorImage'),
      bannerImage:formData.get('bannerImage'),
      imageOne:formData.get('imageOne'),
      imageTwo:formData.get('imageTwo'),
      imageThree:formData.get('imageThree'),
      bookId:id
    };
    try {
      const valid = await ValidationSchemaAddBook.validate(data)
      if (review) {
        updateReview(review?.id,data)
        setAlert({
          active: true,
          message: `La siguiente reseña ah sido actualizada: `,
          type: 'error',
          book:`${review?.title}`,
          autoClose: false,
        });
        setTimeout(() => {
          router.push('/resenas');
        }, 4000);
      } else {
        addReview(data);
        setTimeout(() => {
          router.push('/libros');
        }, 2000);  

      }
    } catch (error) {
      setAlert({
        active: true,
        message: error.message,
        type: 'error',
        autoClose: true,
      })
    }
  }
      return(
        <form ref={formRef} onSubmit={handleSubmit}>
        <div className="relative mb-6">
        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Titulo de la reseña <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
         </svg>
        </label>
        <input 
        defaultValue={review?.title}
        type="text" 
        id="title"
        name='title' 
        className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " 
        placeholder="Escria un titulo" 
        required=""/>
        </div>
        <div className="col-span-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Imagen de Banner
              </label>
              <textarea
                defaultValue={review?.bannerImage}
                name="bannerImage"
                id="bannerImage"
                autoComplete="bannerImage"
                rows="3"
                className="form-textarea mt-1 block w-full mt-1 focus:ring-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
        <div className="relative mb-6">
        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Acerca del Autor <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
         </svg>
        </label>
        <textarea 
        defaultValue={review?.aboutAuthor}
        type="text" 
        id="aboutAuthor" 
        name='aboutAuthor'
        className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none " 
        placeholder="Escriba acerca del autor" 
        required=""/>
        </div>
        <div className="col-span-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Imagen del Autor
              </label>
              <textarea
                defaultValue={review?.authorImage}
                name="authorImage"
                id="authorImage"
                autoComplete="authorImage"
                rows="3"
                className="form-textarea mt-1 block w-full mt-1 focus:ring-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
        <div className="relative mb-6">
        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Introduccion <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"></path>
         </svg>
        </label>
        <div className="flex">
         <div className="relative w-full">
           <textarea 
           defaultValue={review?.introduction}
           id='introduction'
           name='introduction'
           className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none " 
           placeholder="Escriba una introduccion..."/>
         </div>
        </div>
        </div>
        <div className="col-span-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Imagen 1
              </label>
              <textarea
                defaultValue={review?.imageOne}
                name="imageOne"
                id="imageOne"
                autoComplete="imageOne"
                rows="3"
                className="form-textarea mt-1 block w-full mt-1 focus:ring-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
        <div className="relative mb-6">
        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Revisado <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"></path>
         </svg>
        </label>
        <div className="flex">
         <div className="relative w-full">
           <textarea 
           defaultValue={review?.review}
           id='review'
           name='review'
           className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none " 
           placeholder="Escriba un revisado..."></textarea>
         </div>
        </div>
        </div>
        <div className="col-span-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Imagen 2
              </label>
              <textarea
                defaultValue={review?.imageTwo}
                name="imageTwo"
                id="imageTwo"
                autoComplete="imageTwo"
                rows="3"
                className="form-textarea mt-1 block w-full mt-1 focus:ring-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
        <div className="relative mb-6">
        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Conclusion <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"></path>
         </svg>
        </label>
        <div className="flex">
         <div className="relative w-full">
           <textarea 
           defaultValue={review?.conclusion}
           id='conclusion'
           name='conclusion'
           className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none " 
           placeholder="Escriba una conclusión..."></textarea>
         </div>
        </div>
        </div>
        <div className="col-span-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Imagen 3
              </label>
              <textarea
                defaultValue={review?.imageThree}
                name="imageThree"
                id="imageThree"
                autoComplete="imageThree"
                rows="3"
                className="form-textarea mt-1 block w-full mt-1 focus:ring-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
        <div className="relative mb-6">
        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Crítica <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"></path>
         </svg>
        </label>
        <div className="flex">
         <div className="relative w-full">
           <textarea 
           defaultValue={review?.criticism}
           id='criticism'
           name='criticism'
           className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none " 
           placeholder="Escriba una crítica..."></textarea>
         </div>
        </div>
        </div>
        <button className="w-full h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-full shadow-xs text-white text-base font-semibold leading-6">Guardar</button>
        </form>
    );
};