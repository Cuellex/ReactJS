import CartWidget from "./CartWidget";
import logo from "../../assets/just-play.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg colores ">
            <div className="container-fluid colores">
                <a className="navbar-brand colores" href="#">
                    <img className="logo colores"
                        src={logo}
                        style={{ height: "50px" }}
                        alt="logo" />
                </a>
                <button className="navbar-toggler colores" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon colores"></span>
                </button>
                <div className="collapse navbar-collapse colores" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 colores">
                        <Link  to="/" className="nav-item">
                            <p className="nav-link colores" aria-current="page">Inicio</p> {/* Preguntar para sacar la linea debaja del boton de 'Inicio' */}
                        </Link>
                            {/* <li className="nav-item">
                                <a className="nav-link colores" href="#">Noticias</a>
                            </li> */}
                        <li className="nav-item dropdown">
                            <p className="nav-link dropdown-toggle colores" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Generos
                            </p>
                            <ul className="dropdown-menu"> 
                                <Link to="/category/accion" className="dropdown-item">Acción</Link>
                                <Link to="/category/aventura" className="dropdown-item">Aventura</Link>
                                <Link to="/category/terror" className="dropdown-item">Terror</Link>
                                <li><hr className="dropdown-divider"/></li>
                                <Link to="/category/" className="dropdown-item">Aleatorio</Link>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex colores" role="search">
                        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                        <CartWidget />
                    </form>
                </div>
            </div>
        </nav>
    );
};
