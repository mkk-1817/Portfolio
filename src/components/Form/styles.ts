import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  display: grid;
  place-items: center;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 3rem;
    font-family: 'Instrument Sans', sans-serif;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    max-width: 70rem;

    input, textarea {
      width: 100%;
      padding: 1.5rem 2rem;
      border-radius: 1rem;
      outline: none;
      background: var(--glass);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      font-weight: 400;
      font-family: 'Inter', sans-serif;
      transition: 0.3s;

      &::placeholder {
        color: var(--text-secondary);
        opacity: 0.6;
      }

      &:focus {
        border-color: var(--accent);
        background: rgba(255, 255, 255, 0.05);
      }
    }

    textarea {
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }

    button {
      margin-top: 1rem;
      width: 100%;
      max-width: 25rem;
      padding: 1.5rem;
      font-family: 'Instrument Sans', sans-serif;
      letter-spacing: 1px;
    }
  }

  @media (max-width: 740px) {
    form {
      input, textarea {
        width: 100%;
      }
    }
  }
`

export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    color: var(--accent);
  }

  button {
    border-radius: 0.8rem;
    padding: 1.2rem 3rem;
  }
`