import { FC } from 'react';
import { getPercentage } from '../../utils/percentage.utility';
import {
  ProfileContainer,
  BarProgress,
  RowLayout,
  TextSection,
  VoteSection,
  Pressable,
} from './styles';

interface Props {
  id: string;
  key: string;
  date: string;
  name: string;
  likes: number;
  active: string;
  picture: string;
  dislikes: number;
  isVoting: boolean;
  description: string;
  onClick: (id: string) => void;
  voteAgain: () => void;
  setActive: (list: string) => void;
}

const votingButtons: string[] = ['like', 'dislike'];

const CardCelebrity: FC<Props> = ({
  id,
  name,
  date,
  likes,
  active,
  picture,
  dislikes,
  isVoting,
  description,
  onClick,
  voteAgain,
  setActive,
}) => {
  const { firstValue, secondValue } = getPercentage(likes, dislikes);

  return (
    <ProfileContainer background={picture}>
      <RowLayout>
        <TextSection>
          <p>{name}</p>
          <p>{description}</p>
        </TextSection>
        <VoteSection>
          <p>{date}</p>

          <div className='vote_buttons'>
            {!isVoting && (
              <>
                {votingButtons.map(list => (
                  <Pressable
                    key={list}
                    type={list}
                    status={active === list}
                    onClick={() => setActive(list)}
                  />
                ))}
              </>
            )}

            <button onClick={!isVoting ? () => onClick(id) : () => voteAgain()}>
              {!isVoting ? 'Vote Now' : 'Vote Again'}
            </button>
          </div>
        </VoteSection>
      </RowLayout>
      <BarProgress>
        <progress value={Math.round(firstValue)} max='100' />
        {firstValue.toFixed(1)} {secondValue.toFixed(1)}
      </BarProgress>
    </ProfileContainer>
  );
};

export default CardCelebrity;
