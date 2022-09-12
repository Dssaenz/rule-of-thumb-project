import styled from 'styled-components';

export const FooterContainer = styled.div`
  .footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 0 1rem 3rem;
  }

  .footer__links li {
    padding: 0.5rem 0;
    font-size: 1.25rem;
  }

  .footer__links li a {
    color: var(--color-dark-gray);
    text-decoration: none;
  }

  .footer__links li a:hover {
    color: var(--color-darker-gray);
    text-decoration: underline;
  }

  .footer__social > span {
    color: var(--color-darker-gray);
    font-size: 1.25rem;
    text-align: right;
  }

  .footer__social > ul {
    display: flex;
    margin-top: 1rem;
  }

  .footer__social > ul > li {
    margin-right: 1rem;
  }

  @media all and (min-width: 768px) {
    .footer {
      align-items: flex-start;
    }

    .footer__links ul,
    .footer__social {
      display: flex;
    }

    .footer__links ul li {
      padding: 0;
      margin-right: 2rem;
      font-size: 1rem;
    }

    .footer__social {
      align-items: center;
    }

    .footer__social span {
      margin-right: 1rem;
      color: var(--color-dark-gray);
      font-size: 0.833rem;
    }

    .footer__social > ul {
      margin-top: 3px;
    }
  }
`;
