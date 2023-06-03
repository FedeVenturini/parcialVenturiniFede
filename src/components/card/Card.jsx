import React from "react"
import style from './Card.module.css'


const Card = () => {
    return(
        <div className={style.card}>
            <h3>Nombre:</h3>
            <h2>Tu VideoJuego favorito:</h2>

            <p>Gran decisión Nerdie 🤓</p>
        </div>
    )
}

export default Card