import styled from 'styled-components';

export const Container = styled.div`
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

  .banner-top .banner__left {
    flex-basis: 40%;
    padding-right: 1rem;
  }

  .banner-top .banner__left > .banner__hairline {
    color: var(--color-dark-gray);
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: -0.07rem;
  }

  .banner-top .banner__left > .banner__title {
    display: block;
    color: var(--color-dark-gray);
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.05rem;
  }

  .banner-top .banner__right {
    flex-basis: 60%;
  }

  .banner-top .banner__text {
    margin: 0;
    color: var(--color-dark-gray);
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: -0.05rem;
  }

  .banner-top .icon-button {
    display: none;
  }

  .icon-button {
    padding: 0;
    border: 0;
    background-color: transparent;
  }

  .icon-button[aria-label='thumbs up'] {
    background-color: rgba(var(--color-green-positive), 0.8);
  }

  .icon-button[aria-label='thumbs up']:hover {
    background-color: rgba(var(--color-green-positive), 1);
  }

  .icon-button[aria-label='thumbs down'] {
    background-color: rgba(var(--color-yellow-negative), 0.8);
  }

  .icon-button[aria-label='thumbs down']:hover {
    background-color: rgba(var(--color-yellow-negative), 1);
  }

  .icon-button > img {
    width: 100%;
    height: 100%;
  }

  @media all and (min-width: 500px) {
    .banner-top .banner__left {
      flex-basis: 30%;
    }

    .banner-top .banner__right {
      flex-basis: 70%;
    }
  }

  @media all and (min-width: 768px) {
    .banner-top .banner__left {
      flex-basis: 20%;
    }

    .banner-top .banner__right {
      flex-basis: 80%;
    }
  }

  @media all and (min-width: 1100px) {
    .banner-top .banner__text,
    .banner-top .banner__left > .banner__hairline {
      font-size: 1rem;
    }

    .banner-top .banner__left > .banner__title {
      font-size: 1.5rem;
      letter-spacing: 0;
    }

    .banner-top .icon-button {
      display: block;
      margin-left: 2rem;
    }
  }
`;
