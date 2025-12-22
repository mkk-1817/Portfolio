import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  header {
    text-align: center;
    h2 {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      font-family: 'Instrument Sans', sans-serif;
    }
    p {
      color: var(--secondary);
      font-weight: 500;
      font-size: 1.8rem;
    }
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin-top: 6rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 40rem;
      gap: 2rem;
      background: var(--glass);
      border: 1px solid var(--glass-border);
      box-shadow: var(--glass-shadow);
      backdrop-filter: var(--backdrop-blur);
      border-radius: 1.6rem;
      padding: 2rem;
      transition: var(--transition);

      img {
        width: 3rem;
        filter: var(--icon-filter);
      }

      a {
        color: var(--text-primary);
        font-weight: 500;
        font-size: 1.6rem;
        letter-spacing: 0.5px;
      }

      &:hover {
        transform: translateY(-5px);
        background: var(--glass-hover);
        border-color: var(--secondary);
      }
    }
  }

  @media(max-width: 960px) {
    .contacts {
      flex-direction: column;
      div {
        max-width: 100%;
      }
    }
  }
`
