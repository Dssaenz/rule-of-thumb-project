import { VOTE_ACTIONS } from '../types/enums';
import { DataProps } from '../types/app';

interface CountState {
  isVoting: boolean;
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
      type: VOTE_ACTIONS.HANDLE_VOTING;
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
    case VOTE_ACTIONS.HANDLE_VOTING:
      return {
        ...state,
        isVoting: !state.isVoting,
      };
    default:
      return state;
  }
};

export default votingReducer;
