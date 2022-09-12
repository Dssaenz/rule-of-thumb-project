import styled from 'styled-components';

export const AsideContainer = styled.div`
  .banner {
    position: relative;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin: 1rem;
    background-color: var(--color-light-gray);
  }

  .banner-bottom {
    flex-direction: column;
    padding: 1rem 3rem;
    margin-top: 2rem;
  }

  .banner-bottom .banner__heading {
    position: relative;
    margin: 0 0 1rem;
    color: var(--color-dark-gray);
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
  }

  .banner-bottom .banner__right {
    width: 100%;
  }

  .banner-bottom .banner__cta {
    position: relative;
    display: block;
    width: 100%;
    padding: 1rem 0;
    border: 2px solid var(--color-darker-background);
    background: transparent;
    color: var(--color-darker-gray);
    font-size: 1.5rem;
  }

  @media all and (min-width: 768px) {
    .banner-bottom {
      flex-direction: row;
      justify-content: space-between;
      padding: 1rem 2rem;
    }

    .banner-bottom .banner__background {
      top: -230%;
    }

    .banner-bottom .banner__right {
      width: auto;
    }

    .banner-bottom .banner__heading {
      margin-bottom: 0;
      font-size: 1.5rem;
    }

    .banner-bottom .banner__cta {
      width: 16rem;
    }
  }

  @media all and (min-width: 1100px) {
    .banner-bottom .banner__cta {
      width: 20rem;
    }
  }
`;
