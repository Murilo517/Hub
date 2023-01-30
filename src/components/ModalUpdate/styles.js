import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.571);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  .modalBody {
    gap: 46px;
    width: 370px;
    height: 350px;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  .headerModal {
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    width: 100%;
    background: #343b41;
    padding: 12px 20px;
    border-radius: 4px 4px 0px 0px;
    color: white;
    align-items: center;
  }

  .headerModal > h2 {
    color: #f8f9fa;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }

  .x {
    color: white;
  }

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0px 20px;
    color: white;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }

  input {
    width: 324px;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    padding: 10px;
    color: white;
  }

  select {
    width: 324px;
    height: 48px;
    padding: 0px 10px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    color: white;
  }

  .btnRegisterModal {
    width: 324px;
    height: 48px;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
`;
