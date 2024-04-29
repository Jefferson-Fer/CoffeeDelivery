import { NavLink } from 'react-router-dom'
import { CardListValues } from './styles'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeesContext'
import { priceFormatter } from '../../../../utils/formatter'

export function Summary() {
  const { coffees } = useContext(CoffeeContext)

  const summary = coffees.reduce(
    (acc, coffee) => {
      if (coffee.quantity > 0) {
        acc.total += coffee.quantity * coffee.price
      }
      return acc
    },
    { total: 0 },
  )

  return (
    <CardListValues>
      <section>
        <h3>Total</h3>
        <h3>{priceFormatter.format(summary.total)}</h3>
      </section>
      <NavLink to={'/success'} title="Success">
        <button>Confirmar Pedido</button>
      </NavLink>
    </CardListValues>
  )
}
