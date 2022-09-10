import styled, { DefaultTheme } from 'styled-components';

interface PropsStyle {
  background?: string;
  type?: string;
  status?: boolean;
  theme: DefaultTheme;
}

export const ProfileContainer = styled.div`
  width: 300px;
  height: 300px;
  background-image: ${({ background }: PropsStyle) => `url(${background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 30px;
`;

export const BarProgress = styled.div`
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  background-color: ${props => props.theme.colors.lightGreen};
`;

export const RowLayout = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const TextSection = styled.div``;

export const VoteSection = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .vote_buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Pressable = styled.div`
  width: 30px;
  height: 30px;
  border-width: 2px;
  margin-right: 10px;
  border-color: ${props => props.theme.colors.text.light};
  border-style: ${({ status }: PropsStyle) => (status ? 'solid' : 'none')};
  background-color: ${({ theme, type }: PropsStyle) =>
    type === 'like' ? theme.colors.green : theme.colors.orange};
`;
