const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;


const endPoints ={
    books:{
        getBook:(id)=>`${API}/${VERSION}/books/${id}`,
        getAllBooks:`${API}/${VERSION}/books`,
        addBook:`${API}/${VERSION}/books`,
        updateBook:(id)=>`${API}/${VERSION}/books/${id}`,
        deleteBook:(id)=>`${API}/${VERSION}/books/${id}`
    },
    reviews:{
        getAllReviews:`${API}/${VERSION}/review`,
        getReview:(id)=>`${API}/${VERSION}/review/${id}`,

    },
}

export default endPoints;