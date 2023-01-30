import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledFormRegister } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const FormRegister = () => {
  const { registerUser } = useContext(UserContext);

  const RegisterSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .required("O email é obrigatório")
      .email("Forneça um email válido"),
    password: yup
      .string()
      .required("Coloque sua senha")
      .min(8, "Minimo de 8 caracteres")
      .matches(/(?=.*?[a-z])/, "Necessário ter ao menos uma letra")
      .matches(/(?=.*?[0-9])/, "Necessário ter ao menos um numero")
      .matches(/(?=.*?[#?!@$%^&*-])/, "Necessário ter ao menos um símbolo"),
    passwordConfirmation: yup
      .string()
      .required("Confirme sua Senha")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
    bio: yup.string().required("A bio é obrigatória"),
    contact: yup.string().required("Informação de contato é obrigatório"),
    course_module: yup.string().required("Modulo é obrigátorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
    mode: "onBlur",
  });

  return (
    <StyledFormRegister onSubmit={handleSubmit(registerUser)} noValidate>
      <label htmlFor="idName">Nome</label>
      <input
        id="idName"
        type="text"
        placeholder="Digite aqui seu nome"
        {...register("name")}
      />
      {errors.name?.message && <p>{errors.name.message}</p>}

      <label htmlFor="idEmail">Email</label>
      <input
        id="idEmail"
        type="email"
        placeholder="Digite seu email"
        {...register("email")}
      />
      {errors.email?.message && <p>{errors.email.message}</p>}

      <label htmlFor="idPassword">Senha</label>
      <input
        id="idPassword"
        type="password"
        placeholder="Digite sua senha"
        {...register("password")}
      />
      {errors.password?.message && <p>{errors.password.message}</p>}

      <label htmlFor="idConfirm">Confirmar senha</label>
      <input
        id="idConfirm"
        type="password"
        placeholder="Digite novamente sua senha"
        {...register("passwordConfirmation")}
      />
      {errors.passwordConfirmation?.message && (
        <p>{errors.passwordConfirmation.message}</p>
      )}

      <label htmlFor="idBio">Bio</label>
      <input
        id="idBio"
        type="text"
        placeholder="Fale sobre você"
        {...register("bio")}
      />
      {errors.bio?.message && <p>{errors.bio.message}</p>}

      <label htmlFor="idContact">Contato</label>
      <input
        id="idContact"
        type="text"
        placeholder="Opção de contato"
        {...register("contact")}
      />
      {errors.contact?.message && <p>{errors.contact.message}</p>}

      <label htmlFor="idSelect">Selecionar módulo</label>
      <select name="" id="idSelect" {...register("course_module")}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </select>
      {errors.couser_module?.message && <p>{errors.couser_module.message}</p>}

      <button type="submit">Cadastrar</button>
    </StyledFormRegister>
  );
};
