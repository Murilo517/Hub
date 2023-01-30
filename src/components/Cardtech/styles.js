import { FaRegTrashAlt } from "react-icons/fa";
import styled from "styled-components";

export const StyledCardTech = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #121214;
  padding: 12px 22px;
  border-radius: 4px;

  :hover {
    background: #343b41;
  }

  .divStatus {
    display: flex;
    gap: 50px;
    align-items: center;
  }
`;

export const Trash = styled(FaRegTrashAlt)`
  color: white;
`;
