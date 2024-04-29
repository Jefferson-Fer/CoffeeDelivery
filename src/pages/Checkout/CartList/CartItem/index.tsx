import { Trash } from 'phosphor-react'
import { Coffee, CoffeeContext } from '../../../../contexts/CoffeesContext'
import { FormEvent, useContext } from 'react'
import { ButtonContent } from './styles'

interface CardProps {
  coffee: Coffee
}

export function CartItem({ coffee }: CardProps) {
  const { deleteCoffee } = useContext(CoffeeContext)

  const handleDeleteCoffee = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    deleteCoffee(coffee.id)
  }

  return (
    <div>
      <img src={coffee.img} alt="" />
      <aside>
        <h3>{coffee.title}</h3>
        <form onSubmit={(e) => handleDeleteCoffee(e)}>
          <input type="text" value={coffee.quantity} readOnly />
          <ButtonContent>
            <Trash size={22} />
            REMOVER
          </ButtonContent>
        </form>
      </aside>
      <h4>R$ 9,90</h4>
    </div>
  )
}
