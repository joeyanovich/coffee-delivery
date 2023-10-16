import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/default";

interface InfoContainerProps {
  $background: string | undefined;
}

export const getColorByName = (colorName: keyof typeof defaultTheme): string | undefined => {
  return defaultTheme[colorName]
}

export const InfoContainer = styled.div<InfoContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.375rem;

  .info-img{
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    
    width: 2rem;
    height: 2rem;

    background-color: ${props => props.$background || 'transparent'};
    color: ${props => props.theme['background']};
  }
  h4 {
    font-weight: 400;
  }
`