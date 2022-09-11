import { useReducer, useEffect } from 'react';

import votingReducer from '../reducers/votingReducer';
import { LOCAL_STORAGE_KEYS, VOTE_ACTIONS } from '../types/enums';
import {
  getLocalStorage,
  setLocalStorage,
} from '../utils/localStorage.utilily';

import { data } from '../../data';

const initialState = {
  people:
    getLocalStorage(LOCAL_STORAGE_KEYS.PEOPLE) === null
      ? data
      : JSON.parse(getLocalStorage(LOCAL_STORAGE_KEYS.PEOPLE) as string),
};

const useSendVote = () => {
  const [{ people }, dispatch] = useReducer(votingReducer, initialState);

  const voteAgain = (userId: string) =>
    dispatch({ type: VOTE_ACTIONS.HANDLE_VOTING, payload: userId });

  const onSelectLike = (userId: string) => {
    dispatch({ type: VOTE_ACTIONS.LIKE_VOTE, payload: userId });
  };
  const onSelectDislike = (userId: string) => {
    dispatch({ type: VOTE_ACTIONS.DISLIKE_VOTE, payload: userId });
  };

  const sendVote = (
    userId: string,
    activeLike: boolean,
    activeDislike: boolean
  ) => {
    if (!activeLike && !activeDislike) return false;

    activeLike
      ? dispatch({ type: VOTE_ACTIONS.POSITIVE_VOTE, payload: userId })
      : dispatch({ type: VOTE_ACTIONS.NEGATIVE_VOTE, payload: userId });

    dispatch({ type: VOTE_ACTIONS.HANDLE_VOTING, payload: userId });
  };

  useEffect(() => {
    setLocalStorage(LOCAL_STORAGE_KEYS.PEOPLE, people);
  }, [people]);

  return {
    people,
    sendVote,
    voteAgain,
    onSelectLike,
    onSelectDislike,
  };
};

export default useSendVote;
