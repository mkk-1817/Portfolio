import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;

  .about-text {
    h2 {
      font-size: 4rem;
      margin-bottom: 3rem;
      color: var(--text-primary);
      font-family: 'Instrument Sans', sans-serif;
    }

    h3 {
      font-size: 2.4rem;
      margin-top: 4rem;
      margin-bottom: 2rem;
      color: var(--secondary);
    }

    p {
      font-size: 1.8rem;
      line-height: 1.6;
      color: var(--text-secondary);
      margin-bottom: 2rem;
    }
  }

  .hard-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding: 1.5rem;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    backdrop-filter: var(--backdrop-blur);
    border-radius: 1rem;
    transition: var(--transition);
    width: 10rem;

    &:hover {
      transform: translateY(-5px);
      border-color: var(--accent);
    }

    img {
      width: 4rem;
    }
    
    p {
      font-size: 1.2rem;
      margin-bottom: 0;
      color: var(--text-primary);
    }
  }

  .about-image {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      max-width: 45rem;
      border-radius: 2rem;
      filter: grayscale(1);
      transition: var(--transition);
      &:hover {
        filter: grayscale(0);
        transform: scale(1.02);
      }
    }
  }

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 5rem;
    text-align: center;
    
    .hard-skills {
      justify-content: center;
    }

    .about-image {
      img {
        max-width: 30rem;
      }
    }
  }
`