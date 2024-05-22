import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "DartkSoul",
    email: "nicolas00@gmail.com",
  });

  const { username, email } = formState;

  const onInputCahnge = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("Hey");
  }, []);

  useEffect(() => {
    // console.log("Hey");
  }, [formState]);

  useEffect(() => {
    // console.log("email cambio");
  }, [email]);

  return (
    <>
      <h1>Formualrio Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputCahnge}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="nicolas@gmail.com"
        name="email"
        value={email}
        onChange={onInputCahnge}
      />

      { username === "DartkSoul4010" && <Message />}
    </>
  );
};
