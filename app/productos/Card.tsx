import './Card.css'
import CardPromo from './CardPromo'




export default function Card(Props: {
   producto: {
    id: number;
    imagen: string;
    titulo: string;
    descripcion: string;
    precio: number;
    envio: boolean;
}
}) {

    const { id, imagen, titulo, descripcion, precio, envio } = Props.producto;

    return (

        <div className="card">
            <img className='imagen' src={imagen} alt="" />
            <div className="card-info">
                <h2>{titulo}</h2>
                <p className='descripcion'>
                    {descripcion}
                </p>
                <div className="card-info-detalles">
                    <p className='precio'>${precio}</p>

                    {envio &&
                        <p className='envio'>Envío gratis</p>
                    }

                </div>
            </div>
        </div>
    )
}
