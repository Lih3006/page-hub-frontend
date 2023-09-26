import styled from "styled-components";

export const StyledHeaderLogin = styled.header`
  max-width: 370px;
  width: 90%;
  text-align: center;
  margin: 80px auto 20px auto;
`;

export const StyledHeaderRegister = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 57px auto 40px auto;
  max-width: 370px;
  width: 90%;

  button {
    background-color: var(--color-gray-3);
    font-size: var(--font-headline);
    font-weight: var(--font-weight-SemiBold);
    color: var(--color-gray-0);
    padding: 10px 25px;
    border-radius: var(--border-radius-1);
    transition: 300ms;
  }
  button:hover {
    background-color: var(--color-gray-2);
  }
`;

/* export const StyledHeaderDashboard = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 57px auto 40px auto;
  max-width: 370px;
  width: 90%;

  button {
    background-color: var(--color-gray-3);
    font-size: var(--font-headline);
    font-weight: var(--font-weight-SemiBold);
    color: var(--color-gray-0);
    padding: 10px 25px;
    border-radius: var(--border-radius-1);
    transition: 300ms;
  }
  button:hover {
    background-color: var(--color-gray-2);
  }
`; */
