import { memo } from "react";

export const ShowIncrement = memo(({ incremnent }) => {

    console.log("Me volví a generar :(");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        incremnent(10);
      }}
    >
      Incrementar
    </button>
  );
});
