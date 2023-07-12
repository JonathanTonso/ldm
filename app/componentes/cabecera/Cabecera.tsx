import './Cabecera.css';
import 'animate.css';
import Link from 'next/link';

export default function () {

    return (

        <div className='cabecera'>
        <img className='cabecera-logo' src='./imagenes-logo/logo-color2.jpg' ></img>
                <Link className='animate__heartBeat' href='./'>Lo de Maria - Bazar </Link>
              
        
        </div>

        

    )

}