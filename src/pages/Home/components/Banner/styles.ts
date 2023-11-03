import styled from "styled-components";
import bg from '../../../../../public/bg-hero.png'

export const BannerContainer = styled.main`
  width: 100vw;
  min-height: 34rem;

  background-image: url(${ bg });
  background-position: center;
  background-size: cover;
`

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;

  margin: auto;
  max-width: 70rem;
  height: auto;
  padding: 5.75rem 0;

  @media  (max-width: 70rem) {
    gap: 0;

    margin: 0 1.5rem;
  }

  @media (max-width: 50rem) {
    padding: 0;
  }
`

export const LeftContainer = styled.div`
  width: 40.125rem;

  h1{
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 900;

    color: ${props => props.theme['base-title']};
  }
  h2 {
    padding-top: 1rem;
    padding-bottom: 4.125rem;

    font-size: 1.25rem;
    font-weight: 400;

    color: ${props => props.theme['base-subtitle']};
  }

  @media (max-width: 50rem) {
    text-align: center;
    padding: 0;
    margin-top: 4rem;
    width: 100%;
}
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;

  @media  (max-width: 70rem) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 50rem) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
`

export const RightContainer = styled.div`
  @media (max-width: 50rem) {
    display: none;
  }
`