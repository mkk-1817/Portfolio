import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --pink: #E31F71;
    --black: #0B0B0B;
    --green: #23ce6b;
    --blue: #3B82F6;
    --accent: #FFFFFF;
    --secondary: #3B82F6;
    --text-primary: #FFFFFF;
    --text-secondary: #93C5FD;
    --transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    --glass: rgba(255, 255, 255, 0.05); /* Increased opacity */
    --glass-hover: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.2); /* Stronger border */
    --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.2); /* Deeper shadow */
    --backdrop-blur: blur(24px); /* Stronger blur */
    scroll-padding-top: 10rem;
    --hero-text-gradient: linear-gradient(90deg, #fff 0%, #a5a5a5 100%);
    --icon-filter: brightness(0) invert(1);
    
    &.light{
      body{
        transition: var(--transition);
        background-color: #F8FAFC;
        color: #0F172A;
        --text-primary: #0F172A;
        --text-secondary: #3B82F6;
        --glass: rgba(0, 0, 0, 0.05);
        --glass-border: rgba(0, 0, 0, 0.15);
        --accent: #0F172A;
        --secondary: #2563EB;
        --hero-text-gradient: linear-gradient(90deg, #1e293b 0%, #475569 100%);
        --icon-filter: brightness(0);
      }

      .logo{
        color: #0F172A;
      }

      header.header-fixed{
        background-color: rgba(248, 250, 252, 0.8);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--glass-border);
        a{
          color: #0F172A;
        }
        .menu,.menu:before, .menu:after{
          background-color: #0F172A; 
        }
      }

      footer.footer{
        background-color: #F1F5F9;
        color: #0F172A;
      }

      form{
        input,textarea{
          border: 1px solid #CBD5E1;
          background: #FFFFFF;
          color: #0F172A;
          &::placeholder{
            color: #94A3B8;
          }
        }
      }
    }
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: var(--text-primary);
    overflow-x: hidden;
  }

  body, input, textarea, button{
    font-family: 'Instrument Sans', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6{
    font-family: 'Instrument Sans', sans-serif;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  ul, li {
    text-decoration: none;
    list-style: none;
  }

  a{
    text-decoration: none;
    transition: var(--transition);
  }

  button, .button{
    border: none;
    cursor: pointer;
    background: var(--accent);
    color: var(--black);
    border-radius: 0.8rem;
    font-weight: 600;
    padding: 1.2rem 2.8rem;
    transition: var(--transition);
    font-family: 'Instrument Sans', sans-serif;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    &:hover{
      transform: translateY(-2px);
      box-shadow: 0 10px 30px -10px rgba(255, 255, 255, 0.3);
      filter: brightness(0.9);
    }

    &:active {
      transform: translateY(0);
    }
  }

  button:disabled, .button:disabled{
    filter: grayscale(1);
    cursor: not-allowed;
    opacity: 0.6;
  }

  .logo{
    font-size: 2.8rem;
    font-weight: 700;
    color: #FFFF;
    font-family: 'Instrument Sans', sans-serif;
    letter-spacing: -1px;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--black);
  }
  ::-webkit-scrollbar-thumb {
    background: #2D2D2D;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #3D3D3D;
  }


`