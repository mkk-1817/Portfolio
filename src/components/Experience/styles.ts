import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 6rem;
    font-family: 'Instrument Sans', sans-serif;
  }

  .experience-timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 0;

    &::after {
      content: '';
      position: absolute;
      width: 4px;
      background: var(--secondary);
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -2px;
      border-radius: 2px;
    }
  }

  .experience-item {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
    box-sizing: border-box;

    &.left {
      left: 0;
    }

    &.right {
      left: 50%;

      &::before {
        left: -16px;
      }
    }

    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      right: -10px;
      background-color: var(--glass);
      border: 4px solid var(--secondary);
      top: 20px;
      border-radius: 50%;
      z-index: 1;
    }
    
    &.right::after {
      left: -10px;
    }

    &.left::after {
      right: -10px;
    }

    .content {
      padding: 2rem;
      background: var(--glass);
      border: 1px solid var(--glass-border);
      backdrop-filter: var(--backdrop-blur);
      border-radius: 1.5rem;
      position: relative;
      transition: var(--transition);
      
      &:hover {
        transform: translateY(-5px);
        background: var(--glass-hover);
        border-color: var(--secondary);
      }

      h3 {
        color: var(--accent);
        font-family: 'Outfit', sans-serif;
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }

      h4 {
        color: var(--text-primary);
        font-family: 'Instrument Sans', sans-serif;
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 1rem;
      }
      
      .date {
        color: var(--text-secondary);
        font-size: 1.4rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
      }

      .location {
        color: var(--text-primary);
        font-size: 1.3rem;
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 768px) {
    .experience-timeline::after {
      left: 31px;
    }

    .experience-item {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;

      &.left, &.right {
        left: 0;
      }

      &::after {
        left: 21px;
      }
      
      &.right::after, &.left::after {
        left: 21px;
      }
    }
  }
`
