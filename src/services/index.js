const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;


const endPoints ={
    books:{
        getAllBooks:`${API}/${VERSION}/books`,
        addBook:`${API}/${VERSION}/books`,
    },
}

export default endPoints;