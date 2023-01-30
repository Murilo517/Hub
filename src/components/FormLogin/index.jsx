import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import { StyledFormLogin } from "./styles";
import { UserContext } from "../../contexts/UserContext";

export const FormLogin = () => {
  const { login } = useContext(UserContext);


  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("O email é obrigatório")
      .email("Forneça um email válido"),
    password: yup.string().required("Insira sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });


  return (
    <StyledFormLogin onSubmit={handleSubmit(login)} noValidate>
      <Input
        type="email"
        id="email"
        label="Email"
        placeholder="Digite seu Email"
        register={register("email")}
      />
      {errors.email?.message && <span>{errors.email.message}</span>}

      <Input
        type="password"
        id="password"
        label="Senha"
        placeholder="Digite sua Senha"
        register={register("password")}
      />
      {errors.password?.message && <span>{errors.password.message}</span>}

      <button type="submit">
       Entrar
      </button>
    </StyledFormLogin>
  );
};
