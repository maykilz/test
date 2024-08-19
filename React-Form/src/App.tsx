import { useState } from "react";

import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface MyForm {
  username: string;
  password: string;
  role: string;
  rang: number;
  name: string;
  surname: string;
}

interface isSend {
  send: boolean;
}
import "./App.css";

function App() {
  const [sended, isSended] = useState<isSend>({ send: false });
  const { register, handleSubmit } = useForm<MyForm>({});

  const submit: SubmitHandler<MyForm> = async (data) => {
    console.log(data);
  };

  const error: SubmitErrorHandler<MyForm> = (data) => {
    console.log(data);
  };
  const Valid = () => {
    return (
      <>
        <span>Hello world</span>
      </>
    );
  };
  return (
    <>
      <form action="registration.php">
        <input type="submit" value="" />
      </form>
      <form
        action="registration.php"
        method="post"
        onSubmit={handleSubmit(submit, error)}
      >
        <input
          type="text"
          {...register("username", {
            required: true,
            minLength: 5,
          })}
        />
        <input
          type="text"
          {...register("password", {
            required: true,
            minLength: 5,
          })}
          placeholder="passü"
        />
        <select id="" {...register("role")}>
          <option value="admin">Администратор</option>
          <option value="foreman">Бригадир</option>
          <option value="construktion">Конструктор</option>
          <option value="worker">Сборщик</option>
          <option value="winder">Намотчик</option>
        </select>
        <input
          type="text"
          {...register("name", {
            required: true,
            minLength: 5,
          })}
          placeholder="name"
        />
        <input
          type="number"
          {...register("rang", {
            required: true,
            valueAsNumber: true,
          })}
          placeholder="rang"
        />
        <input
          type="text"
          {...register("surname", {
            required: true,
            minLength: 5,
          })}
          placeholder="surname"
        />
        <input type="submit" value="Отправить" />
      </form>

      {sended.send && <Valid />}
    </>
  );
}

export default App;
