import { useState } from "react";



export default function CardPromo() {

    /*
    INFORMACION GRAL:   -CANTIDAD
                        -PRECIO UNITARIO
                        -PRECIO TOTAL
    INFORMACION FIJA.
                        -PRECIO UNITARIO

    INFORMACION VARIABLE: CANTIDAD
                        -PRECIO TOTAL

    */


    const precioUnitario = 500;
    const [cantidad, setCantidad] = useState(0);

    function sumar() {
        const cantidadElegida = cantidad + 1;
        setCantidad(cantidadElegida);

        // otra forma mas corta seria setCantidad(cantidad + 1) y me evito crear la constante; 
    }

    function restar() {
        if (cantidad >0){ // si la cantidad es menor a 0, no se ejecuta la resta.
            setCantidad(cantidad - 1); // es lo mismo que en la funcion de sumar pero mas reducido.
        }
        
    }

    return (

        <div>

            <p>Precio unitario: ${precioUnitario}</p>
            <div>
                <button onClick={restar}> Restar -</button>
                <p>cantidad: {cantidad} </p>
                <button onClick={sumar} > Sumar +</button>
            </div>
            <p>Total: $ {cantidad * precioUnitario}</p>


        </div>
    )

}