import styled from "styled-components";
import bg from '../../../public/bg-hero.png'

export const HomeContainer = styled.main`
  width: 100vw;
  height: 34rem;

  background-image: url(${ bg });
  background-position: center;
  background-size: cover;
.container {
    display: flex;
    align-items: center;
    gap: 3.5rem;

    margin: auto;
    max-width: 70rem;
    height: auto;
    padding: 5.75rem 0;
  }
  .left{
    width: 40.125rem;
  }
  .left h1{
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 900;

    color: ${props => props.theme['base-title']};
  }
  .left h2 {
    padding-top: 1rem;
    padding-bottom: 4.125rem;

    font-size: 1.25rem;
    font-weight: 400;

    color: ${props => props.theme['base-subtitle']};
  }
  .info-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
  }

  @media  (max-width: 70rem) {
    .container{
      gap: 0;

      margin: 0 1.5rem;
    }
    .info-container{
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 50rem) {
    .container {
      padding: 0;
    }
    .left {
      text-align: center;
      padding: 0;
      margin-top: 4rem;
      width: 100%;
    }
    .right{
      display: none;
    }
  }
`
  