const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;


const endPoints ={
    books:{
        getAllBooks:`${API}/${VERSION}/products`,
        addBook:`${API}/${VERSION}/products`,
    },
}

export default endPoints;