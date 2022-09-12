import styled from 'styled-components';

export const MainContainer = styled.div`
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

  .hero {
    position: relative;
    overflow: hidden;
    height: 80vw;
    min-height: 35rem;
    max-height: 38rem;
    margin-bottom: 2rem;
  }

  .hero__background {
    position: absolute;
    left: -35vw;
    width: 160vw;
    height: 100%;
    object-fit: cover;
  }

  .hero__featured-card {
    position: relative;
    top: 5.5rem;
    left: 1rem;
    overflow: hidden;
    width: 55vw;
    max-height: 25rem;
  }

  .hero__closing-gauge {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 3rem;
    background-color: var(--color-light-background);
  }

  .featured-card__glass-background {
    position: absolute;
    top: -20%;
    left: -20%;
    width: 140%;
    height: 140%;
    background: center no-repeat
        linear-gradient(
          var(--color-dark-background),
          var(--color-dark-background)
        ),
      -25vw 0/160vw no-repeat url('../assets/img/pope-francis.png');
    filter: blur(1rem);
  }

  .featured-card__content {
    position: relative;
    padding: 1rem;
    color: var(--color-white);
  }

  .featured-card__hairline {
    margin: 0;
    font-weight: 300;
    white-space: nowrap;
  }

  .featured-card__title {
    margin: 0;
    font-size: 3rem;
    font-weight: 400;
    line-height: 1;
  }

  .featured-card__desc {
    display: -webkit-box;
    overflow: hidden;
    max-height: 10.5rem;
    margin: 1rem 0;
    -webkit-box-orient: vertical;
    font-size: 1.25rem;
    font-weight: 300;
    -webkit-line-clamp: 6;
    text-overflow: ellipsis;
  }

  .featured-card__cta {
    font-weight: 700;
  }

  .featured-card__buttons {
    display: flex;
    justify-content: space-between;
    margin: 0 -1rem -1rem;
  }

  .featured-card__buttons > .icon-button {
    width: 50%;
    height: 2.75rem;
  }

  .featured-card__buttons > .icon-button > img {
    max-width: 1.25rem;
  }

  .closing-gauge__left {
    position: relative;
    display: flex;
    width: 30%;
    align-items: center;
    justify-content: flex-end;
    padding: 0 0.25rem 0 0;
    background-color: var(--color-dark-background);
    color: var(--color-white);
    font-weight: 300;
    text-transform: uppercase;
  }

  .closing-gauge__left:after {
    position: absolute;
    right: -0.5rem;
    display: block;
    width: 0;
    height: 0;
    border-top: 0.25rem solid transparent;
    border-bottom: 0.25rem solid transparent;
    border-left: 0.5rem solid var(--color-dark-background);
    content: ' ';
  }

  .closing-gauge__right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 0 0 0.75rem;
  }

  .closing-gauge__number {
    color: var(--color-dark-gray);
    font-size: 1.5rem;
    font-weight: 400;
  }

  .closing-gauge__desc {
    color: var(--color-dark-gray);
    font-size: 1.5rem;
    font-weight: 300;
  }

  .featured-card__more-info {
    display: none;
  }

  .featured-card__more-info-icon {
    width: 1.5rem;
    height: 1rem;
    margin-right: 0.5rem;
  }

  .max-centered {
    display: contents;
  }

  @media all and (min-width: 768px) {
    .hero {
      max-height: 38rem;
    }

    .hero__background {
      top: -6.5rem;
      left: 0;
      width: 110vw;
      height: auto;
    }

    .featured-card__glass-background {
      background: center no-repeat
          linear-gradient(
            var(--color-dark-background),
            var(--color-dark-background)
          ),
        7vw -6.5rem/115vw auto no-repeat url(../assets/img/pope-francis.png);
    }

    .featured-card__content {
      padding: 2rem 1.5rem;
    }

    .featured-card__more-info {
      display: inline-block;
      margin: 0;
      font-weight: 300;
    }

    .featured-card__buttons {
      margin: 0 -1.5rem -2rem;
    }
  }

  @media all and (min-width: 1100px) {
    .max-centered {
      position: relative;
      display: block;
      width: 100vw;
      max-width: 1100px;
      margin-right: auto;
      margin-left: auto;
    }

    .hero {
      min-height: 700px;
    }

    .hero__background {
      top: -2.5rem;
      left: 0;
      width: 100vw;
      height: auto;
    }

    .hero__featured-card {
      left: 0;
      width: 50%;
      min-width: 600px;
      max-height: unset;
      margin-top: 2.5rem;
    }

    .featured-card__glass-background {
      background: center no-repeat
          linear-gradient(
            var(--color-dark-background),
            var(--color-dark-background)
          ),
        calc(-50vw + 650px) -6rem/105vw auto no-repeat url(../assets/img/pope-francis.png);
    }

    .featured-card__content {
      padding: 2rem 1.5rem;
    }

    .featured-card__desc {
      max-width: 85%;
      margin: 2rem 0 1rem;
    }

    .featured-card__cta {
      margin: 1rem 0 2rem;
      font-size: 1.5rem;
    }

    .featured-card__buttons {
      margin: 0 -1.5rem -2rem;
    }

    .featured-card__buttons > .icon-button {
      height: auto;
    }

    .featured-card__buttons > .icon-button > img {
      max-width: 2rem;
      height: 2rem;
      margin: 1.3rem 0;
    }

    .closing-gauge__left {
      padding-right: 1rem;
    }

    .closing-gauge__right {
      padding-left: 1rem;
    }

    .closing-gauge__title {
      font-size: 1.25rem;
    }

    .closing-gauge__number,
    .closing-gauge__desc {
      font-size: 2rem;
    }

    .closing-gauge__left:after {
      border-top-width: 0.33rem;
      border-bottom-width: 0.33rem;
    }
  }
`;
