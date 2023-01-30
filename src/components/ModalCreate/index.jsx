import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { StyledModal } from "./styles";
import * as yup from "yup";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

export const Modal = ({ setOpen }) => {
  const { createTech } = useContext(TechContext);

  const modalSchema = yup.object().shape({
    title: yup.string().required("Insira um nome!"),
    status: yup.string().required("Escolha um Status"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(modalSchema),
  });

  return (
    <StyledModal>
      <div className="modalBody">
        <div className="headerModal">
          <h2>Cadastrar tecnologia</h2>
          <button onClick={() => setOpen(false)} className="x">
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(createTech)} noValidate>
          <label htmlFor="idName">Nome</label>
          <input placeholder="Insira o nome" type="text" id="idName" {...register("title")} />
          {errors.title?.message && <p>{errors.title.message}</p>}

          <label htmlFor="idStatus">Selecionar Status</label>
          <select name="" id="idStatus" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status?.message && <p>{errors.status.message}</p>}
          <button className="btnRegisterModal" type="submit">
            Cadastrar Tecnologia
          </button>
        </form>
      </div>
    </StyledModal>
  );
};
