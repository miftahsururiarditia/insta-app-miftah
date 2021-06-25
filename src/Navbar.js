import { Link } from 'react-router-dom'
import { useHistory } from "react-router"

const Navbar = () => {
    const history = useHistory()
    const nama = localStorage.getItem('nama')

    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.clear()
        history.push('/')
    }

    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="col-sm">
                <div className="navbar-brand">Selamat Datang, {nama}</div>
                <button onClick={handleLogout} className="btn btn-danger">Logout</button>
            </div>
            <div className="col-sm"></div>
            <div className="col-sm" style={{textAlign: "right"}}>
                <Link className="navbar-brand" to="#">Insta App</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;