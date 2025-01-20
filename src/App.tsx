import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import './App.css'
import ErrorPages from './pages/ErrorPages'
import NotFoundPages from './pages/NotFoundPages'


const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1>,
    errorElement:<ErrorPages />
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
