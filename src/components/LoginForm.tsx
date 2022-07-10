import React, { FC, useContext, useState } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const { store } = useContext(Context);

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Пароль"
      />
      <input
        onChange={(e) => setRepeatPassword(e.target.value)}
        value={repeatPassword}
        type="repeatPassword"
        placeholder="Повторный пароль"
      />
      <button onClick={() => store.signIn(email, password)}>Логин</button>
      <button onClick={() => store.signUp(email, password, repeatPassword)}>
        Регистрация
      </button>
    </div>
  );
};

export default observer(LoginForm);
