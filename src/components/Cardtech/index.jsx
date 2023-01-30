import React from "react";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledCardTech, Trash } from "./styles";

export const CardTech = ({  tech,  setOpenEdit, setTechToEdit}) => {

  const { deleteTech } = useContext(TechContext);

  return (
    <StyledCardTech onClick={()=>{
      setTechToEdit(tech)
      setOpenEdit(true)}}>
      <p>{tech.title}</p>
      <div className="divStatus">
        <span>{tech.status}</span>
        <Trash onClick={() => deleteTech(tech.id)} />
      </div>
    </StyledCardTech>
  );
};
