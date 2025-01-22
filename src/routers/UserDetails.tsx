import { Link, LoaderFunction, useLoaderData } from "react-router-dom"
import { UserResponse } from "../types/app";

const loader: LoaderFunction = async function ({ params }) {
    // creamos la funcion asincrona y le prometemos que la respuesta está esperando por los json de la API
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    // creamos la constante users para guardar los json de la respuesta. Le ponemos tb el tipado de TS
    const user: UserResponse = await response.json();
    // devolvemos todos los users. Si no el ponemos esta linea cargará TODOS los users
    return {user, userId: params.userId};
}

function UserDetails() {

    const {user, userId} = useLoaderData() as {user: UserResponse, userId: string};
      // mirar si un objeto esta vacio
    if(Object.keys(user).length === 0) {
      return <h2>There is no user with id: {userId}</h2>
    }
    
  return (
    <>
      <p><strong>Name: </strong> {user.name}</p>
      <p><strong>Email: </strong>{user.email}</p>
      <p><strong>Website: </strong>{user.website}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <Link to={`/posts?userId=${user.id}`}>User Posts</Link>
    </>
  )
}


UserDetails.loader = loader;

export default UserDetails
