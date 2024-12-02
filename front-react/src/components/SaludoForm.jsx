import React, { useState } from "react";

const SaludoForm = () => {
  const [nombre, setNombre] = useState(""); // Estado para el nombre ingresado
  const [mensaje, setMensaje] = useState(""); // Estado para el mensaje mostrado

  const manejarCambio = (e) => {
    setNombre(e.target.value); // Actualiza el estado del nombre
  };

  const manejarSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    if (nombre.length < 3) {
      setMensaje("El nombre es demasiado corto.");
    } else {
      setMensaje(`Hola, ${nombre}!`);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <form onSubmit={manejarSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={manejarCambio}
          placeholder="Ingresa tu nombre"
          style={{
            display: "block",
            margin: "10px 0",
            padding: "8px",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
        <button type="submit" style={{ padding: "8px 12px", cursor: "pointer" }}>
          Saludar
        </button>
      </form>
      {mensaje && (
        <p style={{ color: nombre.length < 3 ? "red" : "green", marginTop: "10px" }}>
          {mensaje}
        </p>
      )}
    </div>
  );
};

export default SaludoForm;
