import { LoaderFunction, useLoaderData } from "react-router-dom"
import { UserResponse } from "../types/app";
import List from "../components/List";

const loader: LoaderFunction = async function () {
    // creamos la funcion asincrona y le prometemos que la respuesta está esperando por los json de la API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // creamos la constante posts para guardar los json de la respuesta. Le ponemos tb el tipado de TS
    const users: UserResponse[] = await response.json();
    // devolvemos todos los posts. Si no el ponemos esta linea cargará TODOS los posts
    return users
}

function Users() {

    const users = useLoaderData() as UserResponse[];
    
  return (
    <>
      <h2>Users</h2>
      {users.length === 0 ?
       <p className="no.items">No users</p> :
       (
        //Creamos la ruta para los posts que tengan cada id correspondiente
        <List items={users.map(user => ({text: `${user.name} (${user.email})`, link: `/users/${user.id}`}))} />
       )}

    </>
  )
}


Users.loader = loader;

export default Users
