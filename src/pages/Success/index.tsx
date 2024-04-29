import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  SuccessContainer,
  SuccessContent,
  SuccessHeader,
  SuccessInfo,
} from './styles'
import ImgDelivery from '../../assets/Ilustration.png'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeesContext'

export function Success() {
  const { addresses } = useContext(CoffeeContext)
  const theme = useTheme()

  return (
    <SuccessContainer>
      <SuccessHeader>
        <h1>Uhu! Pedico confirmado</h1>
        <span>Agora é só aguardar que o logo o café chegará até você</span>
      </SuccessHeader>
      <SuccessContent>
        {addresses.map((address) => {
          return (
            <SuccessInfo key={address.cep}>
              <p>
                <MapPin
                  weight="fill"
                  size={32}
                  style={{ background: theme.purple }}
                />
                <aside>
                  <h3>
                    Entrega em{' '}
                    <strong>
                      {address.road}, {address.houseNumber}
                    </strong>
                  </h3>
                  <h3>
                    {address.neighborhood} - {address.city} - {address.uf}
                  </h3>
                </aside>
              </p>
              <p>
                <Timer
                  weight="fill"
                  size={32}
                  style={{ background: theme.yellow }}
                />
                <aside>
                  <h3>Previsão de entrega</h3>
                  <h3>
                    <strong>20 min - 30 min</strong>
                  </h3>
                </aside>
              </p>
              <p>
                <CurrencyDollar
                  weight="fill"
                  size={32}
                  style={{ background: theme['yellow-dark'] }}
                />
                <aside>
                  <h3>Pagamento na entrega</h3>
                  <h3>
                    <strong>{address.payment}</strong>
                  </h3>
                </aside>
              </p>
            </SuccessInfo>
          )
        })}
        <img src={ImgDelivery} alt="" />
      </SuccessContent>
    </SuccessContainer>
  )
}
