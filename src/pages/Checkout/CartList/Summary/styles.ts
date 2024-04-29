import styled from 'styled-components'

export const CardListValues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme['base-button']};

  section {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
    }

    h3 {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  button {
    width: 100%;
    border: 0;
    border-radius: 6px;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.yellow};

    font-weight: bold;
    font-size: 0.875rem;
    padding: 0.5rem 0rem;
  }
`
