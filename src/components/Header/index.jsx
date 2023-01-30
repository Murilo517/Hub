import React from "react";
import { BtnLogOut } from "../Button";
import { StyledHeaderDash } from "./styles";

export const Header = ({ logOut }) => {
  return (
    <StyledHeaderDash>
      <div className="divHeader">
        <h1>Kenzie Hub</h1>
        <BtnLogOut logOut={logOut} />
      </div>
    </StyledHeaderDash>
  );
};
