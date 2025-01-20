import { LoaderFunction, useLoaderData } from "react-router-dom"
import { PostResponse } from "../types/app";

const loader: LoaderFunction = async function () {
    // creamos la funcion asincrona y le prometemos que la respuesta está esperando por los json de la API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // creamos la constante posts para guardar los json de la respuesta. Le ponemos tb el tipado de TS
    const posts: PostResponse[] = await response.json();
    // seleccionamos los 10 primeros posts. Si no el ponemos esta linea cargará TODOS los posts
    return posts.slice(0,10);
}

function Home() {

    const posts = useLoaderData() as PostResponse[];
  return (
    <div>
      <h2>Featured posts</h2>
    {/* quedamos aqui para continuar */}
      {posts.length === 0 ?
       <p className="no.items">No posts</p> :
       <p>There are {posts.length} posts</p>}
    </div>
  )
}


Home.loader = loader;

export default Home
