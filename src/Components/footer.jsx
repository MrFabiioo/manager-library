"use client"
import { SlSocialInstagram } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useUser } from "@auth0/nextjs-auth0/client";
export default function Footer(){
    const {user}=useUser();
    return(
            <footer className="bg-gray-900">
                <div className="mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-white sm:text-center ">© 2025 Fabio Ortega Todos los derechos reservados.</span>
                <ul className="flex gap-6 items-center mt-3 text-sm font-medium text-white dark:text-gray-700 sm:mt-0">
                    <li >
                        <a  href="/libros/" className="hover:underline me-4 md:me-6 flex text-white "><FaHome /></a>
                    </li>
                    {user && ( 
                        <>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/fabioortega0206/" className="hover:underline me-4 md:me-6 flex text-white"><SlSocialInstagram /></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.facebook.com/fabio.ortegaxd" className="hover:underline me-4 md:me-6 flex text-white"><FaFacebook /></a>
                    </li> </> 
                    
                    )}
                    
                    <li>
                        <a target="_blank" href="https://github.com/MrFabiioo" className="hover:underline me-4 md:me-6 flex text-white"><FaGithub /></a>
                    </li>
                    
                </ul>
                </div>
            </footer>

    );
}