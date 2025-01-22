import { LoaderFunction, useLoaderData } from "react-router-dom"
import { PostResponse } from "../types/app";
import List from "../components/List";

const loader: LoaderFunction = async function ({request}) {
    // creamos la funcion asincrona y le prometemos que la respuesta está esperando por los json de la API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // creamos la constante posts para guardar los json de la respuesta. Le ponemos tb el tipado de TS
    const posts: PostResponse[] = await response.json();
    const userId = new URL(request.url).searchParams.get('userId');
    if (userId){
      // userId devuelve un string (la url), al ponerle el + lo parseamos para convertirlo en int
      return posts.filter(post => post.userId === +userId)
    }else{
      return posts
    }
    // devolvemos todos los posts. Si no el ponemos esta linea cargará TODOS los posts
}

function Posts() {

    const posts = useLoaderData() as PostResponse[];
    
  return (
    <>
      <h2>Posts</h2>
      {posts.length === 0 ?
       <p className="no-items">No posts</p> :
       (
        //Creamos la ruta para los posts que tengan cada id correspondiente
        <List items={posts.map(post => ({text: post.title, link: `/posts/${post.id}`}))} />
       )}

    </>
  )
}


Posts.loader = loader;

export default Posts
