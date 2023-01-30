import styled from "styled-components";
import { Link as linkRegister } from "react-router-dom";

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 0px 12px;
  align-items: center;

  h1 {
    height: 100%;
    min-height: 17px;

    width: 100%;
    min-width: 98px;

    color: var(--color-primary);
    text-align: center;

    margin-top: 80px;
  }

  h3 {
    text-align: center;
    color: white;
    background: var(--grey-);
  }

  p {
    text-align: center;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;

    color: #868e96;
    background: var(--grey-);
  }

  .divLoginAndForm {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 34px 18px;
    max-width: 300px;

    background: var(--grey-);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
  }
  @media screen and (min-width: 700px) {
    display: flex;
    width: 80%;
    max-width: 1200px;
    min-height: 100vh;
    height: auto;
    align-items: center;
    margin: 0 auto;
    padding: unset;

    h1 {
      align-items: center;
      color: var(--color-primary);
      margin-top: unset;
    }

    .divLoginAndForm {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      max-width: 370px;
      height: 100%;
      max-height: 500px;
      padding-left: 30px;
    }

    h3 {
      color: var(--grey-0);
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      text-align: center;
    }
  }
`;

export const Link = styled(linkRegister)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  color: white;
  width: 100%;
  max-width: 310px;
  min-height: 38px;
  background: #868e96;
  border-radius: 3px;
`;
