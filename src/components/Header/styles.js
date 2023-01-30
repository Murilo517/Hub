import styled from "styled-components";

export const StyledHeaderDash = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-bottom: 20px;
  padding: 26px 12px;
  justify-content: center;

  .divHeader {
    display: flex;
    justify-content: space-around;
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
    flex-direction: row;
    justify-content: center;
    padding: 20px 0px;
    margin-bottom: 20px;

    .divHeader {
      display: flex;
      justify-content: space-between;
      width: 80%;
      align-items: center;
    }
  }
`;
