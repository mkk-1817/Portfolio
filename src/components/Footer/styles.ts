import styled from "styled-components";


export const Container = styled.footer`
  background-color: var(--glass);
  padding: 2.5rem 10rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--glass-border);

  .logo{
    font-size: 2.4rem;
    font-family: 'Outfit', sans-serif;
  }

  p{
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--text-secondary);
    font-size: 1.4rem;
    
    img{
      width: 2rem;
      animation: spinning 5s infinite linear;
    }
  }

  .social-media{
    display: flex;
    align-items: center;
    gap: 2rem;

    img{
      width: 2.7rem;
      transition: var(--transition);
      opacity: 0.7;
      
      &:hover {
        opacity: 1;
        transform: translateY(-5px);
      }
    }
  }

  @keyframes spinning {
    0%{ transform: rotate(0); }
    100%{ transform: rotate(360deg); }
  }

  @media(max-width: 800px){
    padding: 6rem 3rem;
    flex-direction: column;
    gap: 4rem;
    text-align: center;
  }
`
