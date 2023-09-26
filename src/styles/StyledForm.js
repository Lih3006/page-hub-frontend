import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 370px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 42px 1rem;
  background-color: var(--color-gray-3);
  box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius-1);
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    height: 5.25rem;
  }

  legend {
    text-align: center;
    margin-bottom: 1rem;
  }
  small {
    text-align: center;
    margin-bottom: 1rem;
  }

  label {
    text-align: left;
    color: var(--color-gray-0);
    font-size: var(--font-headline);
    font-weight: var(--font-weight-regular);
    margin-bottom: 1rem;
  }

  button {
    width: 100%;
  }
  select,
  input {
    background-color: var(--color-gray-2);
    height: 2.375rem;
    width: 100%;
    padding: 6px 12px;
    color: var(--color-gray-0);
    font-size: var(--font-headline);
    font-weight: var(--font-weight-regular);
    border-radius: var(--border-radius-1);
    border: solid 1px var(--color-gray-2);
  }

  select:focus,
  input:focus {
    border: solid 1px var(--color-gray-0);
    color: var(--color-gray-0);
  }

  select:focus::placeholder,
  input:focus::placeholder {
    color: var(--color-gray-0);
  }
  select {
    color: var(--color-gray-1);
  }
  select::placeholder,
  input::placeholder {
    color: var(--color-gray-1);
    font-size: var(--font-headline);
    font-weight: var(--font-weight-regular);
  }

  p {
    text-align: left;
    color: var(--color-feedback-negativ);
    font-size: var(--font-headline);
    font-weight: var(--font-weight-regular);
    margin-bottom: 1rem;
  }
`;

export const StyledButtonLogin = styled.button`
  background-color: var(--color-primary);
  font-size: var(--font-headline);
  font-weight: var(--font-weight-SemiBold);
  color: var(--color-gray-0);
  padding: 15px 25px;
  border-radius: var(--border-radius-1);
  transition: 300ms;
  margin-bottom: 2.125rem;

  :hover {
    background-color: var(--color-primary-focus);
  }
`;
export const StyledButtonGoBackRegister = styled.button`
  background-color: var(--color-gray-1);
  font-size: var(--font-headline);
  font-weight: var(--font-weight-SemiBold);
  color: var(--color-gray-0);
  padding: 15px 25px;
  border-radius: var(--border-radius-1);
  transition: 300ms;
  margin-top: 1.375rem;

  :hover {
    background-color: var(--color-gray-2);
  }
`;
export const StyledButtonRegister = styled.button`
  background-color: var(--color-primary-negative);
  font-size: var(--font-headline);
  font-weight: var(--font-weight-SemiBold);
  color: var(--color-gray-0);
  padding: 15px 25px;
  border-radius: var(--border-radius-1);
  transition: 300ms;

  :hover {
    background-color: var(--color-primary-focus);
  }
`;
