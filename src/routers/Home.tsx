import { LoaderFunction } from "react-router-dom"

const loader: LoaderFunction = async function () {
    // creamos la funcion asincrona y le prometemos que la respuesta está esperando por los json de la API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // creamos la constante posts para guardar los json de la respuesta
    const posts = await response.json();
    // seleccionamos los 10 primeros posts. Si no el ponemos esta linea cargará TODOS los posts
    return posts.slice(0,10);
}

function Home() {
  return (
    <div>
      <h2>Featured posts</h2>
      {posts}
    </div>
  )
}

export default Home
