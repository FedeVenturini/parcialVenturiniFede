import React, { useState } from "react";
import style from "./Formulario.module.css";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [juego, setJuego] = useState("");
  const [err, setErr] = useState("");

  const onChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const onChangeJuego = (e) => {
    setJuego(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Expresión regular para asegurarme que no hay espacios blanco al principio
    //obvio brindada por chatGpt
    if (!/^\S/.test(nombre) || !/^\S/.test(juego)) {
      setErr("Por favor chequea que la información sea correcta");
    } else if (nombre.length <= 2 || juego.length <= 2) {
      setErr("Por favor chequea que la información sea correcta");
    } else {
      setErr("");
      props.guardarUsuario(nombre, juego);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="nombre">Nombre: </label>
      <input type="text" id="nombre" value={nombre} onChange={onChangeNombre} />

      <label htmlFor="juego" className={style.label}>
        Videojuego favorito:{" "}
      </label>
      <input type="text" id="juego" value={juego} onChange={onChangeJuego} />
      <button>Enviar info 🕹️</button>
      {err && <p>{err}</p>}
    </form>
  );
};

export default Formulario;
