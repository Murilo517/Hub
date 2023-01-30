import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { StyledModal } from "./styles";
import * as yup from "yup";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

export const ModalUpdate = ({ setOpenEdit, techToEdit }) => {

  const { editTech } = useContext(TechContext);

  const modalSchema = yup.object().shape({
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
    
  const edit = (data) =>{
   
  editTech(techToEdit.id,data)

  }
   
  return (
    <StyledModal>
      <div className="modalBody">
        <div className="headerModal">
          <h2>Tecnologia Detalhes</h2>
          <button onClick={() => setOpenEdit(false)} className="x">
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(edit)} noValidate>
          <label htmlFor="idName">Nome do projeto</label>
          <input value={techToEdit.title} type="text" id="idName" />

          <label htmlFor="idStatus">Selecionar Status</label>
          <select name="" id="idStatus" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status?.message && <p>{errors.status.message}</p>}
          <button className="btnRegisterModal" type="submit">
            Salvar Alterações
          </button>
        </form>
      </div>
    </StyledModal>
  );
};
