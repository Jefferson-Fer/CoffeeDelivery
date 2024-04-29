import { CardListContainer } from './styles'
import { useContext } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeesContext'
import { CartItem } from './CartItem'
import { Summary } from './Summary'

export function CartList() {
  const { coffees } = useContext(CoffeeContext)

  return (
    <CardListContainer>
      {coffees.map((coffee) => {
        return <CartItem key={coffee.id} coffee={coffee} />
      })}

      <Summary />
    </CardListContainer>
  )
}
