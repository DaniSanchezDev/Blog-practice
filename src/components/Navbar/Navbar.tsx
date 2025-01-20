import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="./home" className='active'>Home</NavLink></li>
                <li><NavLink to="./users">Users</NavLink></li>
                <li><NavLink to="./posts">Posts</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
