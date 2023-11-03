import styled from "styled-components";

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  gap: 1rem 0.75rem;

  input {
    border-radius: 4px;
    border: 1px solid transparent;
    padding: 0.75rem;

    background-color: ${props => props.theme['base-input']};
  }
  input::placeholder {
    color: ${props => props.theme['base-label']};
  }
  input:focus {
    border: 1px solid ${props => props.theme['yellow-dark']};
    outline: 0;
  }
  input.filled {
    border: 1px solid ${props => props.theme['yellow-dark']};
  }

  input[name="cep"] {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  input[name="rua"] {
    grid-column-start: 1;
    grid-column-end: 4;
  }
  input[name="numero"] {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  input[name="complemento"] {
    grid-column-start: 2;
    grid-column-end: 4;
  }
  input[name="bairro"] {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`