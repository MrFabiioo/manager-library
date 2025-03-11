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
        addReview:`${API}/${VERSION}/review`,
        updateReview:(id)=>`${API}/${VERSION}/review/${id}`,
        deleteReview:(id)=>`${API}/${VERSION}/review/${id}`
    },
    categories:{
        getAllCategories:`${API}/${VERSION}/category`,
        getCategory:(id)=>`${API}/${VERSION}/category/${id}`,
        addCategory:`${API}/${VERSION}/category`,
        updateCategory:(id)=>`${API}/${VERSION}/category/${id}`,
        deleteCategory:(id)=>`${API}/${VERSION}/category/${id}`
    }
}

export default endPoints;