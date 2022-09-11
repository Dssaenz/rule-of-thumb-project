import { VOTE_ACTIONS } from '../types/enums';
import { DataProps } from '../types/app';

interface CountState {
  people: DataProps[];
}

type ActionType =
  | {
      type: VOTE_ACTIONS.POSITIVE_VOTE;
      payload: string;
    }
  | {
      type: VOTE_ACTIONS.NEGATIVE_VOTE;
      payload: string;
    }
  | {
      type: VOTE_ACTIONS.LIKE_VOTE;
      payload: string;
    }
  | {
      type: VOTE_ACTIONS.DISLIKE_VOTE;
      payload: string;
    }
  | {
      type: VOTE_ACTIONS.HANDLE_VOTING;
      payload: string;
    };

const votingReducer = (state: CountState, action: ActionType) => {
  switch (action.type) {
    case VOTE_ACTIONS.POSITIVE_VOTE:
      return {
        ...state,
        people: state.people.map(user =>
          user.id === action.payload
            ? {
                ...user,
                votes: { ...user.votes, positive: user.votes.positive + 1 },
              }
            : { ...user }
        ),
      };

    case VOTE_ACTIONS.NEGATIVE_VOTE:
      return {
        ...state,
        people: state.people.map(user =>
          user.id === action.payload
            ? {
                ...user,
                votes: { ...user.votes, negative: user.votes.negative + 1 },
              }
            : { ...user }
        ),
      };
    case VOTE_ACTIONS.LIKE_VOTE:
      return {
        ...state,
        people: state.people.map(user =>
          user.id === action.payload
            ? {
                ...user,
                likeActive: true,
                dislikeActive: false,
              }
            : { ...user }
        ),
      };
    case VOTE_ACTIONS.DISLIKE_VOTE:
      return {
        ...state,
        people: state.people.map(user =>
          user.id === action.payload
            ? {
                ...user,
                likeActive: false,
                dislikeActive: true,
              }
            : { ...user }
        ),
      };
    case VOTE_ACTIONS.HANDLE_VOTING:
      return {
        ...state,
        people: state.people.map(user =>
          user.id === action.payload
            ? {
                ...user,
                likeActive: false,
                dislikeActive: false,
                isVoting: !user.isVoting,
              }
            : { ...user }
        ),
      };
    default:
      return state;
  }
};

export default votingReducer;
