import { useContext } from "react";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { StyledDashboard } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import { Modal } from "../../components/ModalCreate";
import { CardTech } from "../../components/Cardtech";
import { TechContext } from "../../contexts/TechContext";
import { ModalUpdate } from "../../components/ModalUpdate";
import { useState } from "react";

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  const { open, setOpen, openEdit, setOpenEdit } = useContext(TechContext);

  const navigate = useNavigate();

  const logOut = () => {
    navigate("/");

    localStorage.removeItem("Token");
    localStorage.removeItem("userId");
  };

  const [idEdit, setIdEdit ] =  useState(undefined)

  const [techToEdit, setTechToEdit] = useState({})

  return (
    <>
      <Header logOut={logOut} />
      <StyledDashboard>
        <div className="divNameCourse">
          <p>Olá, {user.name} </p>
          <span>{user.course_module}</span>
        </div>
        <div className="divButtonModal">
          <h2>Tecnologias</h2>
          <button type="button" onClick={() => setOpen(true)}>
            +
          </button>
        </div>
        <div className="divTech">
          <div className="divInsideTech">
            {user.techs.map((tech) => (
              <CardTech
                setOpenEdit={setOpenEdit}
                key={tech.id}
                tech={tech}
                setTechToEdit={setTechToEdit}
              />
            ))}
          </div>
          {open && <Modal setOpen={setOpen} />}
          {openEdit && <ModalUpdate setOpenEdit={setOpenEdit} techToEdit={techToEdit}/>}
        </div>
      </StyledDashboard>
    </>
  );
};
