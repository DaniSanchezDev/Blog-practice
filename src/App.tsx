import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import './App.css'
import ErrorPages from './pages/ErrorPages'
import NotFoundPages from './pages/NotFoundPages'
import Root from './routers/Root'
import Home from './routers/Home'
import Posts from './routers/Posts'
import Users from './routers/Users'


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
        element:<Posts />,
        loader: Posts.loader
      },
      {
        path:'users',
        element:<Users />,
        loader: Users.loader
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
