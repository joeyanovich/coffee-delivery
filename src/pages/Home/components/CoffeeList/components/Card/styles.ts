import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  border-radius: 6px 36px 6px 36px;

  background-color: ${props => props.theme['base-card']};
  
  .img {
    display: flex;
    justify-content: center;
  }
  img {
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
`