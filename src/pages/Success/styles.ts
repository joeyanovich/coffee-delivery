import styled from "styled-components";

export const SuccessContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;

  margin-top: 5rem;
  width: 100%;

  @media (max-width: 63.75rem) {
    justify-content: center;
  }
`

export const LeftSideContainer = styled.div`
  
`

export const RightSideContainer = styled.div`
  display: flex;

  img {
    width: 30.75rem;
  }
  @media (max-width: 63.75rem) {
    margin: 2.5rem auto 0;
  }

  @media (max-width: 32.875rem) {
    img {
      width: 20rem;
    }
  }
`