import { ShoppingCart } from 'phosphor-react'
import { Coffee, CoffeeContext } from '../../contexts/CoffeesContext'
import { useContext, FormEvent, useState } from 'react'
import { priceFormatter } from '../../utils/formatter'

interface CardProps {
  coffee: Coffee
}

export function Card({ coffee }: CardProps) {
  const { handleNewCoffeeList } = useContext(CoffeeContext)
  const [quantity, setQuantity] = useState(0)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleNewCoffeeList(coffee, quantity)
  }

  return (
    <div key={coffee.id}>
      <img src={coffee.img} alt="" />
      <h2>{coffee.title}</h2>
      <span>{coffee.description}</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h5>{priceFormatter.format(coffee.price)}</h5>
        <input
          type="number"
          name="quantity"
          placeholder="0"
          min={0}
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button type="submit">
          <ShoppingCart size={20} weight="fill" />
        </button>
      </form>
    </div>
  )
}
