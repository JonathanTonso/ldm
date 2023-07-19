import './Nav.css'
import Link from 'next/link';


export default function () {

    return (
        <div className="contenido">
            <nav className="nav">
                <ul className="navLista">
                    <li >
                        <Link className='navLink' href='/'> Productos</Link>
                    </li>
                    <li >
                        <Link className='navLink' href='/servicios'> Servicios</Link>
                    </li>
                    <li>
                        <Link className='navLink' href='/nosotros'> Nosotros</Link>
                    </li>
                    <li>
                        <Link className='navLink' href='/contacto'>Contacto </Link>
                    </li>
                </ul>
            </nav>
        </div>


    )
}