export default function NotAutoriced(){

    return(
                 <>
                <div className="flex justify-center items-center">
                    <img src="https://letreros.cl/tifs/maxituras/201339470073104.png" alt="img" />
                </div>
                <div className="flex justify-center items-center">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
                    <a href="/api/auth/login">Login</a>
                    </button>
                </div>
                
                
                </>
                
    );
}