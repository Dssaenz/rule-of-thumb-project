import { FC } from 'react';

import LikeIcon from '../../assets/img/thumbs-up.svg';
import DislikeIcon from '../../assets/img/thumbs-down.svg';
import { getPercentage } from '../../utils/percentage.utility';
import {
  ProfileContainer,
  Section,
  BarProgress,
  RowLayout,
  TextSection,
  VoteSection,
  Pressable,
  VoteButton,
} from './styles';

interface Props {
  id: string;
  name: string;
  date: string;
  likes: number;
  picture: string;
  dislikes: number;
  isVoting: boolean;
  activeLike: boolean;
  description: string;
  listSection: boolean;
  activeDislike: boolean;
  sendVote: (id: string, activeLike: boolean, activeDislike: boolean) => void;
  voteAgain: (id: string) => void;
  onSelectLike: (id: string) => void;
  onSelectDislike: (id: string) => void;
}

const CardCelebrity: FC<Props> = ({
  id,
  name,
  date,
  likes,
  picture,
  dislikes,
  isVoting,
  activeLike,
  description,
  listSection,
  activeDislike,
  sendVote,
  voteAgain,
  onSelectLike,
  onSelectDislike,
}) => {
  const { firstValue, secondValue } = getPercentage(likes, dislikes);

  const personName = name.length > 20 ? `${name.substring(0, 20)} ...` : name;

  const textDescription =
    description.length > 55
      ? `${description.substring(0, 55)} ...`
      : description;

  return (
    <ProfileContainer background={picture} listSection={!listSection}>
      <div className='ranket'>
        {firstValue > secondValue ? (
          <Pressable type='like'>
            <img src={LikeIcon} alt='like' />
          </Pressable>
        ) : (
          <Pressable>
            <img src={DislikeIcon} alt='like' />
          </Pressable>
        )}
      </div>
      <RowLayout listSection={!listSection}>
        <TextSection>
          <p className='text_name'>{personName}</p>
          <p className='text_description'>{textDescription}</p>
        </TextSection>
        <VoteSection>
          <p>{!isVoting ? date : 'Thank you for your vote!'}</p>
          <div className='vote_buttons'>
            {!isVoting && (
              <>
                <Pressable
                  type='like'
                  status={activeLike}
                  onClick={() => onSelectLike(id)}>
                  <img src={LikeIcon} alt='like' />
                </Pressable>
                <Pressable
                  status={activeDislike}
                  onClick={() => onSelectDislike(id)}>
                  <img src={DislikeIcon} alt='dislike' />
                </Pressable>
              </>
            )}
            <VoteButton
              onClick={
                isVoting
                  ? () => voteAgain(id)
                  : () => sendVote(id, activeLike, activeDislike)
              }>
              {!isVoting ? 'Vote Now' : 'Vote Again'}
            </VoteButton>
          </div>
        </VoteSection>
      </RowLayout>
      <Section>
        <div>
          <img src={LikeIcon} alt='like' />
          <p className='minValue'>{firstValue.toFixed(1)}%</p>
        </div>
        <div>
          <p className='maxValue'>{secondValue.toFixed(1)}%</p>
          <img src={DislikeIcon} alt='like' />
        </div>
      </Section>
      <BarProgress value={Math.round(firstValue)} max='100' />
    </ProfileContainer>
  );
};

export default CardCelebrity;
