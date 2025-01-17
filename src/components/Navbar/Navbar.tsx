import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="./home" className='active'>Home</a></li>
                <li><a href="./users">Users</a></li>
                <li><a href="./posts">Posts</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
