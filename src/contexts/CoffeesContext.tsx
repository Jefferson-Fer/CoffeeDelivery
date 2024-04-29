import { ReactNode, createContext, useEffect, useState } from 'react'

export interface Coffee {
  id: number
  description: string
  title: string
  price: number
  img: string
  quantity: number
}

export interface CustomerAdress {
  road: string
  complement: string
  houseNumber: number
  neighborhood: string
  city: string
  cep: number
  uf: string
  payment: string
}

interface CoffeeContextType {
  coffees: Coffee[]
  addresses: CustomerAdress[]
  handleNewCoffeeList: (coffeeItem: Coffee, quantity: number) => void
  deleteCoffee: (coffeeToDelete: number) => void
  addCustomerAdress: (data: CustomerAdress) => void
}

interface CoffeeProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeesProvider({ children }: CoffeeProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>(() => {
    const listCoffee = localStorage.getItem(
      '@project-coffee-delivery:coffees-1.0.0',
    )
    if (listCoffee) {
      return JSON.parse(listCoffee)
    }
    return []
  })
  const [addresses, setAddresses] = useState<CustomerAdress[]>(() => {
    const listAddress = localStorage.getItem(
      '@project-coffee-delivery:addresses-1.0.0',
    )
    if (listAddress) {
      return JSON.parse(listAddress)
    }
    return []
  })

  function handleNewCoffeeList(coffeeItem: Coffee, quantity: number) {
    if (quantity > 0) {
      coffeeItem.quantity = quantity
      setCoffees((state) => [...state, coffeeItem])
    }
  }

  function deleteCoffee(coffeeToDelete: number) {
    const coffesWithoutDeleteOne = coffees.filter((coffee) => {
      if (coffee.id === coffeeToDelete) {
        coffee.quantity = 0
      }
      return coffee.id !== coffeeToDelete
    })

    setCoffees(coffesWithoutDeleteOne)
  }

  function addCustomerAdress(data: CustomerAdress) {
    setAddresses([data])
  }

  useEffect(() => {
    localStorage.setItem(
      '@project-coffee-delivery:coffees-1.0.0',
      JSON.stringify(coffees),
    )

    localStorage.setItem(
      '@project-coffee-delivery:addresses-1.0.0',
      JSON.stringify(addresses),
    )
  }, [coffees, addresses])

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        addresses,
        handleNewCoffeeList,
        deleteCoffee,
        addCustomerAdress,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
