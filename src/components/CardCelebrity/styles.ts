import styled, { DefaultTheme } from 'styled-components';

interface PropsStyle {
  background?: string;
  type?: string;
  status?: boolean;
  listSection?: boolean;
  theme: DefaultTheme;
}

export const ProfileContainer = styled.div`
  background-image: ${({ background }: PropsStyle) => `url(${background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 30px;
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: relative;
  margin-right: 10px;
  display: inline-block;

  .ranket {
    position: absolute;
    top: 85px;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: ${({ listSection }: PropsStyle) => (listSection ? '100%' : '47%')};
    height: ${({ listSection }: PropsStyle) =>
      listSection ? '150px' : '300px'};
    background-size: ${({ listSection }: PropsStyle) =>
      listSection ? '16rem 100%' : 'cover'};
    background-position: left;
    background-color: rgb(121, 121, 121);
  }
  .ranket {
    top: ${({ listSection }: PropsStyle) => (listSection ? '85px' : '85px')};
    left: ${({ listSection }: PropsStyle) => (listSection ? '0px' : '0px')};
  }

  @media screen and (min-width: 769px) {
    width: ${({ listSection }: PropsStyle) => (listSection ? '85%' : '40%')};
    height: ${({ listSection }: PropsStyle) =>
      listSection ? '150px' : '300px'};
    background-size: ${({ listSection }: PropsStyle) =>
      listSection ? '16rem 100%' : 'cover'};
    background-position: left;
    background-color: rgb(121, 121, 121);
  }
  .ranket {
    top: ${({ listSection }: PropsStyle) => (listSection ? '0px' : '85px')};
    left: ${({ listSection }: PropsStyle) => (listSection ? '0px' : '0px')};
  }
`;

export const BarProgress = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 0px;

  ::-webkit-progress-bar {
    background-color: ${props => props.theme.colors.lightOrange};
    overflow: hidden;
  }

  ::-webkit-progress-value {
    background-color: ${props => props.theme.colors.lightGreen};
    transition: filter 300ms, width 300ms;
  }
`;

export const RowLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.darkGradiant};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: ${({ listSection }: PropsStyle) =>
      listSection ? 'row' : 'column'};
    background: ${({ theme, listSection }: PropsStyle) =>
      !listSection
        ? `${theme.colors.darkGradiant}`
        : 'linear-gradient(0.25turn, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), #858585, #858585, #858585, #858585, #858585, #858585, #858585, #858585, #858585)'};
  }
  @media screen and (min-width: 769px) {
    flex-direction: ${({ listSection }: PropsStyle) =>
      listSection ? 'row' : 'column'};
    background: ${({ listSection }: PropsStyle) =>
      !listSection
        ? 'rgba(0, 0, 0, 0.3)'
        : 'linear-gradient(0.25turn, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), #858585, #858585, #858585, #858585, #858585, #858585, #858585, #858585, #858585)'};
  }
`;

export const VoteSection = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 2.2rem;
  p {
    margin-right: 12px;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    color: ${props => props.theme.colors.text.light};
  }
  .vote_buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const TextSection = styled.div`
  padding: 0 8% 0 17%;
  white-space: pre-line;

  .text_name {
    font-weight: 400;
    font-size: 30px;
    color: ${props => props.theme.colors.text.light};
    margin: 0 0 10px 0;
  }
  .text_description {
    word-wrap: break-word;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    margin: 0;
    color: ${props => props.theme.colors.text.light};
  }
`;

export const Section = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  align-items: center;
  padding: 0 1px;
  div {
    display: flex;
    margin: 0 5px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin: 0 10px;
    color: ${props => props.theme.colors.text.light};
  }
`;

export const Pressable = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  margin-right: 10px;
  border-color: ${props => props.theme.colors.text.light};
  border-style: ${({ status }: PropsStyle) => (status ? 'solid' : 'none')};
  background-color: ${({ theme, type }: PropsStyle) =>
    type === 'like' ? theme.colors.green : theme.colors.orange};
`;

export const VoteButton = styled.button`
  width: 109px;
  height: 40px;
  border-width: 1px;
  margin-right: 10px;
  border-color: ${props => props.theme.colors.text.light};
  border-style: solid;
  font-size: 15px;
  line-height: 18px;
  background-color: rgba(0, 0, 0, 0.6);
  color: ${props => props.theme.colors.text.light};
`;
