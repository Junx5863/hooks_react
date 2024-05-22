import { useEffect, useState } from "react";
import { Message } from "./Message";
import { useForm } from "../hook/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputCahnge, username, email, password, onReset } = useForm({
    username: '',
    email: '',
    password: '',
  });

  return (
    <>
      <h1>Formualrio con Custom hookSimple</h1>
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
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputCahnge}
      />

      <button onClick={onReset} className="btn btn-primary ">Reset</button>
    </>
  );
};
