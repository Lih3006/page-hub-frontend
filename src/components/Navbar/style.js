import styled from "styled-components";

export const StyledNavDashboard = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 57px auto 40px auto;
  max-width: 1440px;
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
