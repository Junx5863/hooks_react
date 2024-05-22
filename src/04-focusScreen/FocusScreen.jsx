import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClickRef = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Ingrese su Nombre"
      />

      <button className="btn btn-primary mt-2" onClick={() => onClickRef()}>
        Set Focues
      </button>
    </>
  );
};
