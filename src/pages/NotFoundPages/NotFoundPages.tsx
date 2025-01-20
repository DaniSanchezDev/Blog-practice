import { NavLink } from 'react-router-dom'
import './NotFoundPages.css'

function NotFoundPages() {
  return (
    <div id='not-found'>
      <h1>404</h1>
      <p>Page not found</p>
      <NavLink to='/'>Go back to the main page</NavLink>
 
    </div>
  )
}

export default NotFoundPages
