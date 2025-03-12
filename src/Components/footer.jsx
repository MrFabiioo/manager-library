"use client"
import { SlSocialInstagram } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useUser } from "@auth0/nextjs-auth0/client";
export default function Footer(){
    const {user}=useUser();
    return(
            // <footer className="bg-gray-900">
            //     <div className="mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            //     <span className="text-sm text-white sm:text-center ">© 2025 Fabio Ortega Todos los derechos reservados.</span>
            //     <ul className="flex gap-6 items-center mt-3 text-sm font-medium text-white dark:text-gray-700 sm:mt-0">
            //         <li >
            //             <a  href="/Libros/" className="hover:underline me-4 md:me-6 flex text-white "><FaHome /></a>
            //         </li>
            //         {user && ( 
            //             <>
            //         <li>
            //             <a target="_blank" href="https://www.instagram.com/fabioortega0206/" className="hover:underline me-4 md:me-6 flex text-white"><SlSocialInstagram /></a>
            //         </li>
            //         <li>
            //             <a target="_blank" href="https://www.facebook.com/fabio.ortegaxd" className="hover:underline me-4 md:me-6 flex text-white"><FaFacebook /></a>
            //         </li> </> 
                    
            //         )}
                    
            //         <li>
            //             <a target="_blank" href="https://github.com/MrFabiioo" className="hover:underline me-4 md:me-6 flex text-white"><FaGithub /></a>
            //         </li>
                    
            //     </ul>
            //     </div>
            // </footer>

//             <footer class="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
//     <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
//       <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" class="hover:underline">Biblioteca Personal™</a>.Todos los derechos reservados.
//     </span>
//     <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
//         <li>
//             <a href="/Libros/" className="hover:underline me-4 md:me-6"><FaHome /></a>
//         </li>
//         {user && ( 
//             <>
//         <li>
//             <a target="_blank" href="https://www.instagram.com/fabioortega0206/" className="hover:underline me-4 md:me-6"><SlSocialInstagram /></a>
//         </li>
//         <li>
//             <a target="_blank" href="https://www.facebook.com/fabio.ortegaxd" className="hover:underline me-4 md:me-6"><FaFacebook /></a>
//         </li> </>
//         )}
//         <li>
//             <a target="_blank" href="https://github.com/MrFabiioo" className="hover:underline"><FaGithub /></a>
//         </li>
//     </ul>
//     </div>
// </footer>

<footer className="bg-white  shadow-sm dark:bg-gray-900 mt-auto">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-8 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/images/Creo.png" className="h-8 rounded-xl" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Biblioteca Personal</span>
            </a>
            <ul className="flex flex-wrap items-center aling-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a target="_blank" href="/" className="hover:underline me-4 md:me-6 flex"><FaHome /></a>
                </li>
                <li>
                    <a target="_blank" href="https://www.instagram.com/fabioortega0206/" className="hover:underline me-4 md:me-6 flex"><SlSocialInstagram /></a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/MrFabiioo" className="hover:underline me-4 md:me-6 flex"><FaGithub /></a>
                </li>
                <li>
                    <a target="_blank" href="https://www.facebook.com/fabio.ortegaxd" className="hover:underline me-4 md:me-6 flex"><FaFacebook /></a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="font-mono block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" className="hover:underline">Jose Fabio Ortega Estrada™</a>. Todos los derechos reservados.</span>
    </div>
</footer>

    );
}




