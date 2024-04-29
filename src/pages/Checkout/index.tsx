import { Bank, CheckCircle, CreditCard, CurrencyDollar } from 'phosphor-react'
import {
  ButtonAdress,
  CheckoutAdress,
  CheckoutCards,
  CheckoutCardsList,
  CheckoutContainer,
  CheckoutContent,
  CheckoutPayment,
  RadioGroupPayment,
  RadioGroupPaymentItem,
} from './styles'
import { CartList } from './CartList/Index'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeesContext'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const newAdressSchema = z.object({
  road: z.string(),
  complement: z.string(),
  houseNumber: z.number(),
  neighborhood: z.string(),
  city: z.string(),
  cep: z.number(),
  uf: z.string(),
  payment: z.string(),
})

type NewAdressInputs = z.infer<typeof newAdressSchema>

export function Checkout() {
  const { addCustomerAdress } = useContext(CoffeeContext)

  const { control, register, handleSubmit, reset } = useForm<NewAdressInputs>({
    resolver: zodResolver(newAdressSchema),
  })

  function handleNewCustomerAdress(data: NewAdressInputs) {
    addCustomerAdress(data)
    reset()
  }

  return (
    <CheckoutContainer>
      <CheckoutContent>
        <h1>Complete seu pedido</h1>
        <CheckoutAdress>
          <form onSubmit={handleSubmit(handleNewCustomerAdress)}>
            <input
              type="text"
              placeholder="Logradouro"
              {...register('road')}
              required
            />
            <input
              type="text"
              placeholder="Complemento"
              {...register('complement')}
              required
            />
            <p>
              <input
                type="number"
                placeholder="Número"
                {...register('houseNumber', { valueAsNumber: true })}
                required
              />
              <input
                type="text"
                placeholder="Bairro"
                {...register('neighborhood')}
                required
              />
              <input
                type="text"
                placeholder="Cidade"
                {...register('city')}
                required
              />
            </p>
            <p>
              <input
                type="number"
                placeholder="CEP"
                {...register('cep', { valueAsNumber: true })}
                required
              />
              <input
                type="text"
                placeholder="UF"
                {...register('uf')}
                required
              />
            </p>
            <ButtonAdress type="submit">
              <CheckCircle size={32} weight="fill" />
              <span>Salvar</span>
            </ButtonAdress>
          </form>
        </CheckoutAdress>
        <CheckoutPayment>
          <header>
            <h3>Pagamento</h3>
            <h4>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </h4>
          </header>
          <form>
            <Controller
              control={control}
              name="payment"
              render={({ field }) => {
                return (
                  <RadioGroupPayment
                    onChange={field.onChange}
                    value={field.value}
                    defaultValue="Dinheiro"
                  >
                    <RadioGroupPaymentItem value="Dinheiro">
                      <CurrencyDollar /> Dinheiro
                    </RadioGroupPaymentItem>
                    <RadioGroupPaymentItem value="Cartão de crédito">
                      <CreditCard /> Cartão de Crédito
                    </RadioGroupPaymentItem>
                    <RadioGroupPaymentItem value="Cartão de débito">
                      <Bank /> Cartão de débito
                    </RadioGroupPaymentItem>
                  </RadioGroupPayment>
                )
              }}
            />
          </form>
        </CheckoutPayment>
      </CheckoutContent>
      <CheckoutCards>
        <h1>Cafés selecionados</h1>
        <CheckoutCardsList>
          <CartList />
        </CheckoutCardsList>
      </CheckoutCards>
    </CheckoutContainer>
  )
}
