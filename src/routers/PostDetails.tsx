import { LoaderFunction, useLoaderData } from "react-router-dom"
import { PostResponse } from "../types/app";

const loader: LoaderFunction = async function ({ params }) {
    // creamos la funcion asincrona y le prometemos que la respuesta está esperando por los json de la API
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    // creamos la constante posts para guardar los json de la respuesta. Le ponemos tb el tipado de TS
    const post: PostResponse = await response.json();
    // devolvemos todos los posts. Si no el ponemos esta linea cargará TODOS los posts
    return {post, postId: params.postId};
}

function PostDetails() {

    const {post, postId} = useLoaderData() as {post: PostResponse, postId: string};
      // mirar si un objeto esta vacio
    if(Object.keys(post).length === 0) {
      return <h2>There is no post with id: {postId}</h2>
    }
    
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  )
}


PostDetails.loader = loader;

export default PostDetails
