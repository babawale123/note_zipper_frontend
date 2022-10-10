import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../action/userAction"

const Navbar = () => {

    const dispatch = useDispatch()

    const handleLogout= () => {
        dispatch(logout())
    }
    return(
                <>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <a className="navbar-brand" href="#">Logo</a>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            
                            
                            <Link to="/login" className="nav-link" onClick={handleLogout}>Logout</Link>
                            
                            </li>

                            <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </nav>

                </>
    )
}

export default Navbar