import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
  background: rgba(0,0,0,0);
  min-height: 100vh;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero-text{
    max-width: 60rem;

    & > p{
      font-size: 2rem;
      color: var(--accent);
      font-weight: 500;
      margin-bottom: 1rem;
      font-family: 'Instrument Sans', sans-serif;
      animation: fadeInUp 1s ease 0s backwards;
    }

    h1{
      font-size: 7rem;
      line-height: 1.1;
      margin-bottom: 2rem;
      font-weight: 700;
      background: var(--hero-text-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: 'Instrument Sans', sans-serif;
      animation: fadeInUp 1s ease 0.2s backwards;
    }

    h3{
      color: var(--text-secondary);
      font-size: 3rem;
      margin-bottom: 2rem;
      font-weight: 400;
      animation: fadeInUp 1s ease 0.4s backwards;
    }

    p.small-resume {
      color: var(--text-secondary);
      font-size: 1.6rem;
      margin-bottom: 4rem;
      animation: fadeInUp 1s ease 0.6s backwards;
    }

    p.description {
      font-size: 1.8rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 3rem;
      max-width: 50rem;
      animation: fadeInUp 1s ease 0.5s backwards;
    }
    
    .button {
       gap: 1rem;
       background: var(--glass);
       color: var(--text-primary);
       border: 1px solid var(--glass-border);
       backdrop-filter: var(--backdrop-blur);
       border-radius: 5rem;
       font-weight: 500;
       transition: var(--transition);
       animation: fadeInUp 1s ease 0.8s backwards;
       
       &:hover {
         background: var(--glass-hover);
         transform: translateY(-5px);
         border-color: var(--glass-border);
         filter: none;
       }
    }
  }

  .cta-wrapper {
      display: flex;
      align-items: center;
      gap: 3rem;
      margin-top: 4rem;
  }

  .social-media{
    display: inline-flex;
    align-items: center;
    gap: 2rem;
    animation: fadeInUp 1s ease 1s backwards;

    a {
      display: flex;
      align-items: center;
      transition: var(--transition);
      &:hover {
        transform: translateY(-5px);
      }
    }

    img{
      width: 2.4rem;
      transition: var(--transition);
      opacity: 0.7;
      &:hover{
        opacity: 1;
      }
    }
  }

  .hero-image{
    img{
      max-width: 600px;
      border-radius: 2rem;
      box-shadow: 0 10px 50px rgba(0,0,0,0.5);
      transition: var(--transition);
      &:hover {
        transform: scale(1.02);
      }
    }
  }

  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{
      h1{
        font-size: 5rem;
      }
    }
    .hero-image{
      display: none;
    }
    
    .cta-wrapper {
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
`
