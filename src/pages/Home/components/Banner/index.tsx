import { BannerContainer, BannerContent, BenefitsContainer, LeftContainer, RightContainer } from "./styles";

import { Info } from "./Info";
import imgHero from '../../../../../public/img-hero.png'

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
      <LeftContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
          <BenefitsContainer>
            <Info colorName={'yellow-dark'} icon={ <ShoppingCart size={16} /> } text="Compra simples e segura" />
            <Info colorName={'base-text'} icon={ <Package size={16} /> } text="Embalagem mantém o café intacto" />
            <Info colorName={'yellow'} icon={ <Timer size={16} /> } text="Entrega rápida e rastreada" />
            <Info colorName={'purple'} icon={ <Coffee size={16} /> } text="O café chega fresquinho até você" />
          </BenefitsContainer>
        </LeftContainer>
        <RightContainer>
          <img src={ imgHero } alt="Imagem de um copo de café com alguns grãos de fundo como decoração" />
        </RightContainer>
      </BannerContent>
    </BannerContainer>
  )
}