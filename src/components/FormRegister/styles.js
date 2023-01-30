import styled from "styled-components";

export const StyledFormRegister = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 295px;
  width: 80%;
  background: var(--grey-);
  box-shadow: 0px 3px 32px -8px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  gap: 18px;
  padding: 20px;
  margin-bottom: 20px;

  label {
    color: var(--grey-0);
    margin-bottom: 9px;
    background: var(--grey-);
  }

  p {
    color: red;
    background: var(--grey-);
    font-size: 12px;
  }

  input {
    background: var(--grey-2);
    border: 1px solid var(--grey-2);
    border-radius: 3px;
    color: #868e96;
    width: 100%;
    max-width: 263px;
    height: 38px;
    padding: 0px 12px;
  }

  select {
    background: var(--grey-2);
    border: 1px solid var(--grey-2);
    border-radius: 3px;
    color: #868e96;
    height: 38px;
    padding: 0px 12px;
  }

  @media screen and (min-width: 700px) {
    max-width: 320px;

    input {
      max-width: 300px;
    }

    select {
      max-width: 280px;
    }
  }
`;
