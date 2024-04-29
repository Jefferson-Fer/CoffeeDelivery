import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1440px;

  display: flex;
  flex-direction: column;

  padding: 2rem;
`
export const HomeContent = styled.main`
  display: flex;
  flex-direction: column;
`
export const HomeContentHeader = styled.header`
  display: flex;
  padding-top: 2rem;

  font-size: 1.6rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-subtitle']};
`
export const SectionCard = styled.section`
  width: 100%;

  padding-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  div {
    height: 19rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;

    background: ${(props) => props.theme['base-card']};

    img {
      margin-top: -3rem;
    }

    h2 {
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      padding: 0rem 0.5rem;
      text-align: center;
      color: ${(props) => props.theme['base-text']};
    }

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      padding-top: 0.5rem;

      h5 {
        font-size: 1.5rem;
      }

      input {
        width: 5rem;
        height: 2rem;

        border: 0;
        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 6px;
        border: 0;
        padding: 0.4rem;
        background: ${(props) => props.theme['purple-dark']};

        svg {
          color: ${(props) => props.theme.white};
        }
      }
    }
  }
`
