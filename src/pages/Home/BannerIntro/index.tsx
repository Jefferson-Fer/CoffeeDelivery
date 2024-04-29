import {
  BannerIntroContainer,
  BannerIntroContext,
  BannerIntroInfo,
} from './styles'
import { useTheme } from 'styled-components'
import ImgCoffee from '../../../assets/imagemCoffee.svg'
import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'

export function BannerIntro() {
  const theme = useTheme()

  return (
    <BannerIntroContainer>
      <BannerIntroContext>
        <h3>Encontre o café perfeito para qualquer hora do dia</h3>
        <h4>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h4>
        <BannerIntroInfo>
          <aside>
            <span>
              <ShoppingCartSimple
                size={32}
                weight="fill"
                style={{ background: theme['yellow-dark'] }}
              />{' '}
              Compra simples e segura
            </span>
            <span>
              <Timer
                size={32}
                weight="fill"
                style={{ background: theme.yellow }}
              />{' '}
              Entrega rápida e rastreada
            </span>
          </aside>
          <aside>
            <span>
              <Package
                size={32}
                weight="fill"
                style={{ background: theme['base-text'] }}
              />{' '}
              Emabalagem mantém o café intacto
            </span>
            <span>
              <Coffee
                size={32}
                weight="fill"
                style={{ background: theme.purple }}
              />{' '}
              O café chega fresquinho até você
            </span>
          </aside>
        </BannerIntroInfo>
      </BannerIntroContext>
      <img src={ImgCoffee} alt="" />
    </BannerIntroContainer>
  )
}
