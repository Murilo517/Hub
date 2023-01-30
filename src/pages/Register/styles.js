import styled from "styled-components";
import { Link as linkHeader } from "react-router-dom";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 10px;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 40px;

  .divHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 295px;
    width: 100%;
  }

  h1 {
    height: 100%;
    min-height: 17px;

    width: 100%;
    min-width: 98px;

    color: var(--color-primary);
  }

  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: center;
    margin-top: 48px;
  }
`;

export const StyledPageRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .divForm {
    display: flex;
    flex-direction: column;
    gap: 18px;
    align-items: center;
  }

  h2 {
    color: white;
  }

  span {
    color: #868e96;
  }

  button {
    width: 100%;
    max-width: 278px;
    height: 48px;
    background: #59323f;
    color: var(--grey-0);
    border-radius: 3px;
  }
  button:hover {
    background: var(--color-primary);
  }

  button:focus {
    background: var(--color-primary);
  }
`;

export const Link = styled(linkHeader)`
  color: var(--grey-0);
  text-decoration: none;
  padding: 12px;
  background: #212529;
  border-radius: 4px;
`;
