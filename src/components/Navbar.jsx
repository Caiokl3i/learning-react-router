import { Link } from "react-router-dom"
// 4. Navegando entre páginas

const Navbar = () => {
    return (
        <nav>
            <p><Link to='/'>Home</Link></p>
            <p><Link to='/contact'>Contacts</Link></p>
        </nav>
    )
}

export default Navbar