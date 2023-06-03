import React from "react"
import style from './Card.module.css'


const Card = (props) => {
    return(
        <div className={style.card}>
            <h3>Hola <span>{props.nombre}</span>!!</h3>
            <h2>Tu VideoJuego favorito es el <span>{props.juego}</span></h2>

            <p className={style.p}>Gran decisión Nerdie 🤓</p>
        </div>
    )
}

export default Card