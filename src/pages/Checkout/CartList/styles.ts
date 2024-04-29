import styled from 'styled-components'

export const CardListContainer = styled.div`
  width: 23rem;
  display: flex;
  flex-direction: column;

  font-family: 'Roboto', sans-serif;

  div {
    display: flex;
    gap: 0.5rem;

    padding-bottom: 1rem;

    img {
      width: 4rem;
      height: 4rem;
    }

    aside {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      h3 {
        font-size: 1rem;
        color: ${(props) => props.theme['base-subtitle']};
      }

      form {
        display: flex;
        gap: 0.5rem;

        input {
          width: 4rem;

          padding: 0.5rem;
          border: 0;
          border-radius: 6px;
          background: ${(props) => props.theme['base-button']};
        }

        button {
          display: flex;
          align-items: center;
          justify-content: center;

          padding: 0rem 0.5rem;
          border: 0;
          border-radius: 6px;
          color: ${(props) => props.theme['base-text']};
          background: ${(props) => props.theme['base-button']};

          svg {
            color: ${(props) => props.theme.purple};
          }
        }
      }
    }

    h4 {
      font-size: 0.875rem;
    }
  }
`
export const CardListItems = styled.div`
  h4 {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`
