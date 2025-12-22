import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 10rem;
    font-family: 'Instrument Sans', sans-serif;
  }

  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2rem 1.8rem;
      background: var(--glass);
      border: 1px solid var(--glass-border);
      box-shadow: var(--glass-shadow);
      backdrop-filter: var(--backdrop-blur);
      border-radius: 1.2rem;
      transition: var(--transition);
      display: flex;
      flex-direction: column;
      height: 100%;
      color: var(--text-primary);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, var(--accent), var(--secondary));
        opacity: 0;
        transition: var(--transition);
      }

      &:hover{
        transform: translateY(-5px);
        background: var(--glass-hover);
        border-color: var(--secondary);
        
        &::before {
          opacity: 1;
        }

        header {
          svg {
            stroke: var(--secondary);
          }
        }
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--text-secondary);
        margin-bottom: 3.6rem;
        transition: var(--transition);

        svg {
          transition: var(--transition);
        }

        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;

          a > img {
            width: 3rem;
            // filter: brightness(0) invert(1);
            transition: var(--transition);
            &:hover {
              transform: translateY(-4px);
            }
          }
        }
      }
      
      h3{
        font-size: 2rem;
        margin-bottom: 2rem;
        font-family: 'Instrument Sans', sans-serif;
        color: var(--text-primary);
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        font-family: 'Instrument Sans', sans-serif;
        color: var(--text-primary);
        line-height: 2.25rem;
        // height: 160px;
        // overflow-y: auto;
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.4rem;
          opacity: 0.6;
          color: var(--text-primary);
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`
