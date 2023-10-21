import styled from "styled-components";

export const PayButtonContainer = styled.div`
  width: 11.125rem;

  input {
    display: none;
  }
  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    
    font-size: 0.75rem;
    text-transform: uppercase;
    white-space: nowrap;
    
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 1rem;
    cursor: pointer;

    transition: 0.2s ease-in-out;

    background-color: ${props => props.theme['base-button']};

    svg {
      color: ${props => props.theme['purple']};
    }
  }
  input:hover + label {
    background-color: ${props => props.theme['base-hover']};
    color: ${props => props.theme['base-subtitle']};
  }
  input:checked + label {
    border: 1px solid ${props => props.theme['purple']};

    background-color: ${props => props.theme['purple-light']};
  }
`