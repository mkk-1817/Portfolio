import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  
  /* Floating Island Design */
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-radius: 5rem;
  padding: 1rem 3rem;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);

  nav {
    display: flex;
    align-items: center;
    gap: 3rem;

    a {
      color: var(--text-secondary);
      font-family: 'Instrument Sans', sans-serif;
      font-weight: 500;
      font-size: 1.6rem;
      transition: var(--transition);
      position: relative;
      opacity: 0.8;

      &.active, &:hover {
        color: var(--accent);
        opacity: 1;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background-color: var(--secondary);
        transition: var(--transition);
      }

      &:hover::after {
        width: 20px;
      }

      &.button {
        background: var(--secondary);
        color: white;
        padding: 0.8rem 2rem;
        border-radius: 3rem;
        opacity: 1;

        &::after {
          display: none;
        }

        &:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
        }
      }
    }
  }

  .logo {
    display: none; /* Hiding logo in floating menu for minimalism, or we can move it out */
  }

  /* Mobile Menu Styles */
  .menu-container {
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu {
    width: 2rem;
    height: 0.2rem;
    background: #FFFF;
    position: relative;
    cursor: pointer;
    display: none;

    &:before, &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 0.2rem;
      background: #FFFF;
      transition: 0.4s;
    }

    &:before { top: -0.6rem; }
    &:after { bottom: -0.6rem; }
  }

  /* Theme Toggle Icon Button */
  .theme-toggle {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: center;
    margin-right: 2rem;
    color: var(--text-secondary);
    transition: var(--transition);
    position: relative;
    width: 40px;
    height: 40px;

    &:hover {
      color: var(--accent);
      transform: scale(1.1);
    }

    .sun-icon {
      display: none;
    }

    .moon-icon {
      display: block;
    }
  }

  /* Show sun icon in light mode, moon in dark mode */
  html.light .theme-toggle {
    .sun-icon {
      display: block;
    }

    .moon-icon {
      display: none;
    }
  }
  
  /* Hide Inner Theme Toggle on Desktop */
  nav .theme-toggle {
    display: none;
  }
  


  /* Resume Icon Button */
  .resume-icon-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    transition: var(--transition);
    width: 40px;
    height: 40px;

    &:hover {
      color: var(--accent);
      transform: scale(1.1);
    }
  }

  /* Hide Outer Resume Button on Desktop (Moved here for specificity/override) */
  & > .resume-icon-btn {
    display: none;
  }

  @media (max-width: 960px) {
    top: 0;
    left: 0;
    transform: none;
    width: 100%;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--glass-border);
    justify-content: space-between;
    padding: 2rem 3rem;
    background: rgba(11, 11, 11, 0.8);

    /* Hide Desktop Theme Toggle on Mobile */
    /* & > .theme-toggle {
      display: none;
    } Removed this to show it on mobile */
    
    /* Show Outer Buttons on Mobile */
    & > .theme-toggle,
    & > .resume-icon-btn {
      display: flex;
    }

    .logo {
      display: block;
      font-size: 2rem;
      color: var(--accent);
    }

    .menu {
      display: block;
    }

    nav {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 100vh;
      background: var(--black);
      flex-direction: column;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-20px);
      transition: 0.3s;

      &.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      /* Show Inner Theme Toggle on Mobile - REMOVED (Now outside) */
      .theme-toggle, .resume-icon-btn {
        display: none;
      }
    }
  }
  }

  /* Resume Modal */
  .resume-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    animation: fadeIn 0.3s ease;

    .resume-content {
      width: 90%;
      height: 90%;
      max-width: 1000px;
      background: white;
      border-radius: 1rem;
      position: relative;
      overflow: hidden;
      animation: scaleUp 0.3s ease;
      display: flex;
      flex-direction: column;
      
      iframe {
        border: none;
        width: 100%;
        height: 100%;
        flex: 1;
      }

      .close-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: var(--secondary);
        color: white;
        border: none;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        font-size: 2rem;
        padding: 1rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        transition: var(--transition);

        &:hover {
          transform: scale(1.1);
          background: #e31f71;
        }
      }
      
      .download-btn {
        position: absolute;
        top: 1rem;
        right: 6rem;
        background: var(--secondary);
        color: white;
        padding: 1rem;
        width: 4rem;
        height: 4rem;       
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        transition: var(--transition);
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        
        &:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }
      }
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes scaleUp {
    from { transform: scale(0.9); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`


