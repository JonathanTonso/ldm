"use client"
import { useState } from "react"
import Card from "./Card"
import data from '../../public/data_productos.json'
import './CardWrapper.css'



export default function CardWrapper() {

    const [filtros, setFiltros] = useState("all");

    return (

        <div className="wrapper">


            <div className="grillas">

                <div className="filtros">
                    <label>
                        <input type="radio" name="categoria" value="copa" onChange={() => {
                            setFiltros("copa")
                        }} /> copa <br />
                    </label>

                    <label>
                        <input type="radio" name="categoria" value="cacerola" onChange={() => {
                            setFiltros("cacerola")
                        }} /> cacerola <br />
                    </label>

                    <label>
                        <input type="radio" name="categoria" value="Borrar Filtros" onChange={() => {
                            setFiltros("all")
                        }} /> Borrar Filtros <br />
                    </label>
                    




                </div>

                {data.map(elemento => {

                    if (filtros === "all") {

                        return (
                            <Card key={elemento.id} producto={elemento} />
                        )
                    }

                    if (elemento.categoria === filtros) {
                        return (
                            <Card key={elemento.id} producto={elemento} />
                        )
                    }



                })}



            </div>

        </div>

    )
}