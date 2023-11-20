import styled from "styled-components";

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  gap: 1rem 0.75rem;

  input {
    border-radius: 4px;
    border: 1px solid transparent;
    padding: 0.75rem;

    background-color: ${props => props.theme['base-input']};
  }
  div input::placeholder {
    color: ${props => props.theme['base-label']};
  }
  input:focus {
    border: 1px solid ${props => props.theme['yellow-dark']};
    outline: 0;
  }
  input.filled {
    border: 1px solid ${props => props.theme['yellow-dark']};
  }

  .cep {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  .street {
    grid-column-start: 1;
    grid-column-end: 4;
  }
  .number {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  .complement {
    grid-column-start: 2;
    grid-column-end: 4;
  }
  .district {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    position: relative;

    font-size: 0.75rem;

      > p {
      color: ${props => props.theme['base-error']};
      }
  }
  

  @media (max-width: 43rem) {
    display: flex;
    flex-direction: column;
  }
`


// export const FormContainer = styled.div`
//   display: grid;
//   grid-template-columns: 12.5rem 17.25rem 3.75rem;
//   gap: 1rem 0.75rem;

//   input {
//     border-radius: 4px;
//     border: 1px solid transparent;
//     padding: 0.75rem;

//     background-color: ${props => props.theme['base-input']};
//   }
//   input::placeholder {
//     color: ${props => props.theme['base-label']};
//   }
//   input:focus {
//     border: 1px solid ${props => props.theme['yellow-dark']};
//     outline: 0;
//   }
//   input.filled {
//     border: 1px solid ${props => props.theme['yellow-dark']};
//   }

//   input[name="cep"] {
//     grid-column-start: 1;
//     grid-column-end: 2;
//   }
//   input[name="rua"] {
//     grid-column-start: 1;
//     grid-column-end: 4;
//   }
//   input[name="numero"] {
//     grid-column-start: 1;
//     grid-column-end: 2;
//   }
//   input[name="complemento"] {
//     grid-column-start: 2;
//     grid-column-end: 4;
//   }
//   input[name="bairro"] {
//     grid-column-start: 1;
//     grid-column-end: 2;
//   }

//   @media (max-width: 43rem) {
//     display: flex;
//     flex-direction: column;
//   }
// `

// export const InputWapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.3rem;
//   position: relative;

//   font-size: 0.75rem;

//   p {
//     color: ${props => props.theme['base-error']};
//   }
// `