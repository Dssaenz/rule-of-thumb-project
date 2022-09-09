import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-green-positive: 60, 187, 180;
    --color-yellow-negative: 249, 173, 29;
    --color-dark-background: rgba(0, 0, 0, .4);
    --color-darker-background: rgba(0, 0, 0, .6);
    --color-darker-gray: rgba(51, 51, 51, 1);
    --color-dark-gray: rgba(70, 70, 70, 1);
    --color-light-gray: rgba(235, 235, 235, 1);
    --color-light-background: rgba(255, 255, 255, .4);
    --color-lighter-background: rgba(255, 255, 255, .8);
    --color-white: rgba(255, 255, 255, 1);
  }

  #root{
      margin: 0 auto;
  }

  html, body {
    width: 100%;
    margin: 0;
    background-color: ${props => props.theme.colors.backgroundColor};
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    font-weight: 400;
}

  body {
    position: relative;
  }
`;
