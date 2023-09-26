import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  margin: 57px auto 40px auto;
  max-width: 1440px;
  width: 90%;

  h1,
  h2 {
    text-align: left;
    padding-bottom: 16px;
    width: 100%;
  }

  p {
    text-align: left;
    color: var(--color-gray-1);
    font-size: var(--font-headline);
    font-weight: var(--font-weight-regular);
    margin-bottom: 1rem;
  }

  @media (min-width: 1000px) {
    display: flex;
    max-width: 1440px;
    flex-direction: column;
    justify-content: space-between;

    h1,
    h2 {
      font-size: 18px;
    }

    header {
      width: 100%;
      margin-top: 35px;
      height: 118px;
      justify-content: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        text-align: right;
        width: 50%;
      }
    }

    section {
      p {
        color: #ffffff;
        font-size: var(--font-title);
        font-weight: var(--font-weight-regular);
        padding: 23px 0;
      }
    }
  }
`;
