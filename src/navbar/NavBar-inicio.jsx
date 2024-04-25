import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {

    return(
        <nav className="navbar navbar-expand-lg colores ">
            <div className="container-fluid colores">
                <a className="navbar-brand colores" href="#">
                    <img className="logo colores" src="../assets/just-play.png" alt="logo"/>
                </a>
                <button className="navbar-toggler colores" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon colores"></span>
                </button>
                <div className="collapse navbar-collapse colores" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 colores">
                        <li className="nav-item">
                        <a className="nav-link colores" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link colores" href="#">Noticias</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle colores" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Generos
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Acción</a></li>
                            <li><a className="dropdown-item" href="#">Aventura</a></li>
                            <li><a className="dropdown-item" href="#">Terror</a></li>
                            <li><a className="dropdown-item" href="#">Audiovisual</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Aleatorio</a></li>
                        </ul>
                        </li>

                    </ul>
                    <form className="d-flex colores" role="search">
                        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        <CartWidget/>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar