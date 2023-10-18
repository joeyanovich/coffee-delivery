import { ReactNode } from "react";
import { InfoContainer } from "./styles";
import { defaultTheme } from "../../../../../styles/theme/default";

interface InfoProps {
  icon: ReactNode
  colorName: keyof typeof defaultTheme
  text: string
}

export function Info({ icon, colorName, text }: InfoProps) {
  const background = defaultTheme[colorName]

  return (
    <InfoContainer $background={background}>
      <div className="info-img" style={{ background }}>
        {icon}
      </div>
      <h4>{text}</h4>
    </InfoContainer>
  )
}