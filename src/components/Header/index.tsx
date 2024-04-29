import { AsideLocationAndCard, HeaderContainer, HeaderContent } from './styles'
import Logo from '../../assets/logotipo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeesContext'

export function Header() {
  const { addresses } = useContext(CoffeeContext)

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/" title="Home">
          <img src={Logo} alt="Logotipo" />
        </NavLink>
        <AsideLocationAndCard>
          {addresses.map((address) => {
            return (
              <span key={address.cep}>
                <MapPin size={22} weight="fill" />
                {address.city}, {address.uf}
              </span>
            )
          })}
          <NavLink to="/checkout" title="Checkout">
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </NavLink>
        </AsideLocationAndCard>
      </HeaderContent>
    </HeaderContainer>
  )
}
