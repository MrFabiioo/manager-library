import * as Yup from 'yup'; //import para el paquete instalado

const ValidationSchema = Yup.object().shape({
  title: Yup.string() //Valida Title
    .min(2, '!Titulo demasiado corto: minimo 2 letras¡') //Mínimo 2 caráteres
    .max(100, '!Titulo demasiado largo: maximo 100 letras¡') //Máximo 25 carácteres
    .required('!El titulo es requerido para la creacion de un nuevo libro¡'), //Obligatorio llenar
  author: Yup.string() //Valide el Precio
    .min(2, '!El nombre del autor es demasiado corto: minimo 2 letras¡') //1 es el precio mínimo
    .max(100, '!El nombre del autor es demasiado largo: maximo 100 letras¡') //Hats 100000 el precio máximo
    .required('! Nombre del autor es requerido !¡'), //Requerido
  description: Yup.string() //Valida la descripción
    .min(6, '!Descripcion demasiado corta: Mínimo 6 carácteres¡') //Mínimo 6 carácteres
    .max(100, '!Description demasiado larga: maximo 6 caracteres¡') //Máximo 100 carácteres
    .required('!Se requiere una descripcion para la creacion de un nuevo libro¡'), //Requerido
  categoryId: Yup.string() //Id de categoría
    .min(1, 'La categoria es muy larga!')
    .max(1, 'la categoria es muy corte!')
    .required('!Se requiere la categoria para crear un nuevo libro ¡'),
  image: Yup.string()
    .url('!Debe ser una URL valida ¡') //Es URL
    .required('Se requiere la URL de una imagen para crear un nuevo libro')
    
});

const ValidationSchemaAddBook = Yup.object().shape({
  title: Yup.string() //Valida Title
    .min(2, '!Titulo demasiado corto: minimo 2 letras¡') //Mínimo 2 caráteres
    .max(100, '!Titulo demasiado largo: maximo 100 letras¡') //Máximo 25 carácteres
    .required('!El titulo es requerido para la creacion de un nuevo libro¡'),
  aboutAuthor: Yup.string()
    .min(2,'! Acerca del Autor Es demasiado corto: minimo 2 letras ¡'),
  introduction: Yup.string()
  .min(2,'! Introduccion Es demasiado corto: minimo 2 letras ¡'),
  review: Yup.string()
  .min(2,'! Revisado Es demasiado corto: minimo 2 letras ¡'),
  conclusion:Yup.string()
  .min(2,'! Conclusión Es demasiado corto: minimo 2 letras ¡'),  
  criticism: Yup.string()
  .min(2,'! Cristica Es demasiado corto: minimo 2 letras ¡'),
  // bookId: Yup.string()
  // .min(2,'! el ID del libro Es demasiado corto: minimo 1 letra ¡')
  // .required('Se requiere el  ID de un libro para crear una reseña')
});

const validationSchemaCategory = Yup.object().shape({
  name:Yup.string()
  .min(2,'!Nombre demasiado corto: minimo 2 letras¡') //Mínimo 2 caráteres
  .max(100, '!Nombre demasiado largo: maximo 100 letras¡') //Máximo 25 carácteres
  .required('!Nombre es requerido para la creacion de una nueva categoria !'),
  description:Yup.string()
  .min(2,'! Descripción Es demasiado corto: minimo 2 letras ¡')
  .max(100, '!Descripción demasiado largo: maximo 100 letras¡'),
  image: Yup.string()
  .url('!Debe ser una URL valida ¡') //Es URL
  .required('Se requiere la URL de una imagen para crear una nueva categoria')
});
export { ValidationSchema,ValidationSchemaAddBook ,validationSchemaCategory};