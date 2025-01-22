import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import './App.css'
import ErrorPages from './pages/ErrorPages'
import NotFoundPages from './pages/NotFoundPages'
import Root from './routers/Root'
import Home from './routers/Home'
import Posts from './routers/Posts'
import Users from './routers/Users'
import PostDetails from './routers/PostDetails'
import UserDetails from './routers/UserDetails'
import Register from './routers/Register'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPages />,
    // creamos hijos para las rutas
    children:[
      {
        index:true,
        element:<Navigate to="/home" replace />  // El replace lo que hace es remplazar la ruta del navegador
      },
      {
        path:'home',
        element:<Home />,
        loader: Home.loader
      },
      {
        path:'posts',
        children:[
          {
            // usamos index true siempre que tenemos hijos para que muestre la ruta tal cual la tenemos en el primer hijo
            index: true,
            element: <Posts />,
            loader: Posts.loader

          },
          {
            // usamos los 2 puntos para usarlo como variable, nos viene como String
            path: ':postId',
            element: <PostDetails />,
            loader: PostDetails.loader
          }
        ]
      },
      {
        path:'users',
        children:[
          {
            index: true,
            element:<Users />,
            loader: Users.loader
          },
          {
            path:':userId',
            element: <UserDetails />,
            loader: UserDetails.loader
          }
        ]
      },
      {
        path: 'register',
        element: <Register />,
        action: Register.action
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPages />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
