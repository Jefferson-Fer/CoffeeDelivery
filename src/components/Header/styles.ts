import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem;
`
export const HeaderContent = styled.nav`
  display: flex;
  justify-content: space-between;

  img {
    height: 2.5rem;
  }
`
export const AsideLocationAndCard = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 6px;
    padding: 0.7rem;

    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    padding: 0.8rem;
    border-radius: 6px;
    cursor: pointer;

    background: ${(props) => props.theme['yellow-light']};

    &:hover {
      background: ${(props) => props.theme.yellow};
    }

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 1.25rem;
      height: 1.25rem;

      border-radius: 50%;
      font-weight: bold;
      background: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};

      position: absolute;
      transform: translate(100%, -100%);
    }
  }
`
