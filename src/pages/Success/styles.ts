import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;
  font-family: 'Roboto', sans-serif;
`
export const SuccessHeader = styled.header`
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: bold;
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const SuccessContent = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  img {
    width: 30rem;
    height: 18.125rem;
  }
`
export const SuccessInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;

  border: 2px solid ${(props) => props.theme['yellow-light']};
  border-top-right-radius: 3rem;
  border-bottom-left-radius: 3rem;

  p {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      padding: 0.5rem;
      border-radius: 50%;

      color: ${(props) => props.theme.white};
    }

    aside {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      h3 {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`
