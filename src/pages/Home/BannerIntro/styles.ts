import styled from 'styled-components'

export const BannerIntroContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    max-width: 476px;
    max-height: 360px;
  }
`
export const BannerIntroContext = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 3.2rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }

  h4 {
    font-size: 1.4rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const BannerIntroInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  aside {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 1rem;

      color: ${(props) => props.theme['base-text']};

      svg {
        padding: 0.5rem;
        border-radius: 50%;
        color: ${(props) => props.theme.white};
      }
    }
  }
`
