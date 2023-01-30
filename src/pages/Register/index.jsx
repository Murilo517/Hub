import React from "react";
import { FormRegister } from "../../components/FormRegister";
import { Link, StyledHeader } from "./styles";
import { StyledPageRegister } from "../Register/styles";
import { UserProvider } from "../../contexts/UserContext";


export const Register = () => {
  return (
    <StyledPageRegister>
      <StyledHeader>
        <div className="divHeader">
          <h1>Kenzie Hub</h1>
          <Link to="/">Voltar</Link>
        </div>
      </StyledHeader>
      <div className="divForm">
        <h2>Crie sua conta</h2>
        <span>Rápido e fácil, vamos nessa</span>
        <UserProvider>
          <FormRegister />
        </UserProvider>
      </div>
    </StyledPageRegister>
  );
};
