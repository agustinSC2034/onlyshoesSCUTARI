import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';
import {Link} from "react-router-dom";


export const Navbar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark navMIO">
        <div class="container-fluid">
        <Link class="navbar-brand logoMio" to="/">OnlyShoes {props.CartWidget()}</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse navLiMio" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 navUL">
                    <li class="nav-item">
                        <Link class="nav-link active" to="/">HOME</Link>
                    </li>
                    {/* 
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            MARCAS
                        </a>
                        
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="pages/marcas/nike.html">Nike</a></li>
                            <li><a class="dropdown-item" href="pages/marcas/puma.html">Puma</a></li>
                            <li><a class="dropdown-item" href="pages/marcas/adidas.html">Adidas</a></li>
                            <li><a class="dropdown-item" href="pages/marcas/asics.html">Asics</a></li>
                            <li><a class="dropdown-item" href="pages/marcas/converse.html">Converse</a></li>
                            <li><a class="dropdown-item" href="pages/marcas/fila.html">Fila</a></li>
                            <li><a class="dropdown-item" href="pages/marcas/newBalance.html">New Balance</a></li>
                            <li><a class="dropdown-item" href="pages/marcas/pony.html">Pony</a></li>
                            <li><a class="dropdown-item" href="pages/marcas/reebok.html">Reebok</a></li>
                            <li><a class="dropdown-item" href="pages/marcas/topper.html">Topper</a></li>
                            <li><a class="dropdown-item" href="pages/marcas/underArmour.html">Under Armour</a></li>
                            <li><a class="dropdown-item" href="pages/marcas/vans.html">Vans</a></li>
                        </ul>
                        
                    </li>
                    */}
                    <li class="nav-item">
                    <Link class="nav-link" to="/Marcas/Nike">NIKE</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/Marcas/Adidas">ADIDAS</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/Marcas/Puma">PUMA</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/Nosotros">NOSOTROS</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/Contacto">CONTACTO</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/cart">CARRITO</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }