import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
    color: var(--text-primary);
    font-family: 'Instrument Sans', sans-serif;
  }

  .skills-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .skills-nav {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }

  .skill-tab {
    padding: 1rem 2.5rem;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 5rem;
    color: var(--text-primary);
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    backdrop-filter: var(--backdrop-blur);
    font-family: 'Instrument Sans', sans-serif;

    &:hover {
      background: var(--glass-hover);
      transform: translateY(-2px);
    }

    &.active {
      background: var(--secondary);
      border-color: var(--secondary);
      color: #fff;
    }
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    gap: 3rem;
    padding: 2rem;
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .skill-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 2.5rem;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    backdrop-filter: var(--backdrop-blur);
    border-radius: 1.6rem;
    transition: var(--transition);
    height: 100%;
    
    /* Animation settings */
    opacity: 0; /* invisible initially */
    animation: fadeIn 0.5s ease-in-out forwards;

    &:hover {
      transform: translateY(-8px);
      background: var(--glass-hover);
      border-color: var(--secondary);
    }

    img {
      width: 5rem;
      height: 5rem;
      transition: var(--transition);
    }

    p {
      color: var(--text-primary);
      font-weight: 500;
      font-size: 1.6rem;
      font-family: 'Instrument Sans', sans-serif;
    }
  }
  
  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
      gap: 2rem;
    }
    
    .skill-card {
       padding: 1.5rem;
       
       img {
         width: 4rem;
         height: 4rem;
       }
       
       p {
         font-size: 1.4rem;
       }
    }

    .skills-nav {
      gap: 1rem;
    }
    
    .skill-tab {
      padding: 0.8rem 1.5rem;
      font-size: 1.4rem;
    }
  }
`
