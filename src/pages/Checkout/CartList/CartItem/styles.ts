import styled from 'styled-components'

export const ButtonContent = styled.button`
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
