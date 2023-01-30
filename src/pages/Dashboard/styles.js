import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 12px;

  .divNameCourse {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .divConstruction {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--grey-0);
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868e96;
  }
  .divButtonModal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    gap: unset;
    padding: 15px 0px;
  }

  .divButtonModal > button {
    width: 32px;
    height: 32px;
    background: #212529;
    border-radius: 4px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
  }

  .divButtonModal > h2 {
    color: white;
  }

  .divTech {
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #212529;
    border-radius: 4px;
    padding: 22px;
  }

  .divInsideTech {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;

    .divNameCourse {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 80%;
      align-items: center;
      gap: unset;
      padding: 45px 0px;
    }

    .divButtonModal {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 80%;
      align-items: center;
      gap: unset;
      padding: 10px 0px;
    }

    .divButtonModal > button {
      width: 32px;
      height: 32px;
      background: #212529;
      border-radius: 4px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 25px;
    }

    .divButtonModal > h2 {
      color: white;
    }

    .divTech {
      margin-top: 15px;
      width: 80%;
      display: flex;
      flex-direction: column;
      background: #212529;
      border-radius: 4px;
      padding: 22px;
    }

    .divInsideTech {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
`;
