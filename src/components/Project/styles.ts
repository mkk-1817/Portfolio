import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 10rem;
    font-family: 'Instrument Sans', sans-serif;
  }

  .working-on {
     background: var(--glass);
     border: 2px solid var(--secondary); /* Highlight border */
     box-shadow: 0 0 20px rgba(59, 130, 246, 0.15);
     backdrop-filter: var(--backdrop-blur);
     border-radius: 2rem;
     padding: 3rem;
     margin-bottom: 5rem;
     position: relative;
     overflow: hidden;
     transition: var(--transition);

     &:hover {
        box-shadow: 0 0 30px rgba(59, 130, 246, 0.25);
        transform: translateY(-5px);
     }

     .label {
        background: var(--secondary);
        color: white;
        display: inline-block;
        padding: 0.5rem 1.5rem;
        border-radius: 2rem;
        font-size: 1.4rem;
        font-weight: 600;
        margin-bottom: 2rem;
        font-family: 'Instrument Sans', sans-serif;
     }

     .project-content {
        .body h3 {
           font-size: 2.8rem;
           margin-bottom: 1.5rem;
           color: var(--accent);
        }
        
        .body p {
           font-size: 1.8rem;
           line-height: 1.6;
           max-width: 800px;
        }

        header {
           display: flex;
           justify-content: space-between;
           margin-bottom: 2rem;
           
           .project-links {
              display: flex;
              gap: 1.5rem;
              img { width: 3.5rem; }
           }
        }

        footer {
           margin-top: 2rem;
           .tech-list {
              display: flex;
              gap: 1.5rem;
              flex-wrap: wrap;
              li {
                 font-size: 1.5rem;
                 background: rgba(255,255,255,0.05);
                 padding: 0.5rem 1rem;
                 border-radius: 0.5rem;
              }
           }
        }
     }
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
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 1.4rem;
          opacity: 0.9;
          color: var(--text-primary);
          
          li {
            background: rgba(255,255,255,0.05);
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
          }
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
