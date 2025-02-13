import { LoaderFunction, useLoaderData } from "react-router-dom"
import { PostResponse } from "../types/app";
import List from "../components/List";

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
    <>
      <h2>Featured posts</h2>
      {posts.length === 0 ?
       <p className="no.items">No posts</p> :
       (
        //Creamos la ruta para los posts que tengan cada id correspondiente
        <List items={posts.map(post => ({text: post.title, link: `/posts/${post.id}`}))} />
       )}

    </>
  )
}


Home.loader = loader;

export default Home
