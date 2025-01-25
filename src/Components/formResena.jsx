export default function FormResena(){

    return(
        <form action="">
        <div className="relative mb-6">
        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Titulo de la reseña <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
         </svg>
        </label>
        <input type="text" id="default-search" className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="Cien años de soledad" required=""/>
        </div>
        <div className="relative mb-6">
        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Autor <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
         </svg>
        </label>
        <input type="text" id="default-search" className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="Gabriel Garcia Marquez" required=""/>
        </div>
        <div className="relative mb-6">
        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Introduccion <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"></path>
         </svg>
        </label>
        <div className="flex">
         <div className="relative w-full">
           <textarea className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none" placeholder="Escriba una introduccion..."></textarea>
         </div>
        </div>
        </div>
        <div className="relative mb-6">
        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Revisado <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"></path>
         </svg>
        </label>
        <div className="flex">
         <div className="relative w-full">
           <textarea className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none" placeholder="Escriba un revisado..."></textarea>
         </div>
        </div>
        </div>
        <div className="relative mb-6">
        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Conclusion <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"></path>
         </svg>
        </label>
        <div className="flex">
         <div className="relative w-full">
           <textarea className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none" placeholder="Escriba una conclusión..."></textarea>
         </div>
        </div>
        </div>
        <div className="relative mb-6">
        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Crítica <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"></path>
         </svg>
        </label>
        <div className="flex">
         <div className="relative w-full">
           <textarea className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none" placeholder="Escriba una crítica..."></textarea>
         </div>
        </div>
        </div>
        <button className="w-full h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-full shadow-xs text-white text-base font-semibold leading-6">Agregar reseña</button>
        </form>
    );
};