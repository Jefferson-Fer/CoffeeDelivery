import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
`
export const CheckoutContent = styled.main`
  width: 44.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const CheckoutAdress = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme['base-card']};

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    input {
      padding: 0.5rem;
      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme['base-input']};
    }

    p {
      display: flex;
      gap: 0.5rem;
    }
  }
`
export const ButtonAdress = styled.button`
  width: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 0rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }
`
export const CheckoutPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;
  background: ${(props) => props.theme['base-card']};

  header {
    h3 {
      color: ${(props) => props.theme['base-subtitle']};
    }
    h4 {
      color: ${(props) => props.theme['base-text']};
    }
  }

  form {
    display: flex;
  }
`
export const RadioGroupPayment = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`
export const RadioGroupPaymentItem = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 1rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &[tabindex='0'] {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const CheckoutCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const CheckoutCardsList = styled.div`
  width: 23.5rem;

  display: flex;

  border-top-right-radius: 3rem;
  border-bottom-left-radius: 3rem;
  padding: 2rem;
  background: ${(props) => props.theme['base-card']};
`
export const CardsListContent = styled.div`
  display: flex;
`
