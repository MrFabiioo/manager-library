
export default function Footer(){
    return(
<footer className="bg-white  shadow  dark:bg-gray-800 ">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-300 sm:text-center dark:text-gray-300">© 2025 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-700 sm:mt-0">
        <li>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
        </li>
        <li>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Licensing</a>
        </li>
        <li>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
        </li>
    </ul>
    </div>
</footer>

    );
}