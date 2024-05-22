import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });



  useEffect(() => {
    const onMouseMove = (event) => {
    
        const coords = { x: event.x, y: event.y };
        setCoords(coords);
    };
    
    window.addEventListener("mousemove", onMouseMove);

    return () => {
        window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3> Mensajes Aquí. </h3>
      { JSON.stringify(coords) }
    </>
  );
};
