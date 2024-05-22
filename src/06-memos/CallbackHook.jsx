import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    setCounter((counterValue) => counterValue + value);
  }, []);

  // const incrementFather = () => {
  //     setCounter(counter + 1);
  // }

  return (
    <>
      <h1>CallbackHook {counter} </h1>
      <hr />

      <ShowIncrement incremnent={incrementFather} />
    </>
  );
};
