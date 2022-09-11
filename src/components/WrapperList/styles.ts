import styled from 'styled-components';

export const MainLayout = styled.section`
  .main_template {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .carousel_container {
    padding: 0 20px;
  }

  @media only screen and (min-width: 300px) and (max-width: 480px) {
    .main_template {
      overflow: scroll;
      position: relative;

      ::-webkit-scrollbar {
        display: none;
      }
    }

    .carousel_container {
      padding: 0 20px;
      white-space: nowrap;
      margin: 0px 0 10px 0;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .main_template > div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
    .main_templte--list > div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  @media screen and (min-width: 769px) {
    .main_template > div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
    .main_templte--list > div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;
