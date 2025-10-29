import { Link } from "react-router-dom"
// 4. Navegando entre páginas

const Navbar = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contacts</Link>
        </nav>
    )
}

export default Navbar