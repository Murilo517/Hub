import styled from "styled-components";

export const StyledInput = styled.input`
  background: var(--grey-2);
  border: 1px solid var(--grey-2);
  border-radius: 3px;
  color: #868e96;
  width: 100%;
  max-width: 310px;
  height: 38px;
  padding: 0px 12px;

  :focus {
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
  }
`;
