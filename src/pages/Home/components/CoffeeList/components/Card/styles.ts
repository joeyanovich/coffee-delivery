import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16rem;
  min-height: 19.375rem;

  padding: 0 1.25rem;
  margin-bottom: 1rem;

  border-radius: 6px 36px 6px 36px;

  background-color: ${props => props.theme['base-card']};
  
  .img {
    display: flex;
    justify-content: center;
  }
  img {
    width: 7.5rem;
    margin: -1.25rem auto 0;
  }
  .tag {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    margin-top: 0.75rem;
  }
  .tag span {
    font-size: 0.625rem;
    font-weight: bold;

    padding: 0.25rem 0.5rem;

    border-radius: 100px;

    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
  }
  .content {
    display: flex;
    flex-direction: column;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    margin-top: 1rem; 
    margin-bottom: 2.0625rem;
  }
  .text h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    text-align: center;
    font-weight: bold;

    color: ${props => props.theme['base-subtitle']};
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    
    padding-bottom: 1.25rem;
  }
  .input-number {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .price {
    font-weight: bold;
    font-size: 0.875rem;
  }
  .price span {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
  }
  .text p {
    font-size: 0.875rem;
    text-align: center;

    color: ${props => props.theme['base-label']};
  }
  footer input {
    width: 4.5rem;
    height: 2.375rem;

    border: none;
    border-radius: 6px;
    outline: 0;

    color: ${props => props.theme['base-title']};
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;

    border: none;
    border-radius: 6px;
    cursor: pointer;

    color: ${props => props.theme['base-card']};
    background-color: ${props => props.theme['purple-dark']};
  }
`