import { useState, useReducer, useEffect } from 'react';

import votingReducer from '../reducers/votingReducer';
import { LOCAL_STORAGE_KEYS, VOTE_ACTIONS } from '../types/enums';
import {
  getLocalStorage,
  setLocalStorage,
} from '../utils/localStorage.utilily';

import { data } from '../../data';

const initialState = {
  isVoting: false,
  people:
    getLocalStorage(LOCAL_STORAGE_KEYS.PEOPLE) === null
      ? data
      : JSON.parse(getLocalStorage(LOCAL_STORAGE_KEYS.PEOPLE) as string),
};

const useSendVote = () => {
  const [active, setActive] = useState<string>('');
  const [{ people, isVoting }, dispatch] = useReducer(
    votingReducer,
    initialState
  );

  const voteAgain = () => dispatch({ type: VOTE_ACTIONS.HANDLE_VOTING });

  const sendVote = (userId: string) => {
    if (active === '') return;
    active === 'like'
      ? dispatch({ type: VOTE_ACTIONS.POSITIVE_VOTE, payload: userId })
      : dispatch({ type: VOTE_ACTIONS.NEGATIVE_VOTE, payload: userId });

    dispatch({ type: VOTE_ACTIONS.HANDLE_VOTING });
    setActive('');
  };

  useEffect(() => {
    setLocalStorage(LOCAL_STORAGE_KEYS.PEOPLE, people);
  }, [people]);

  return {
    active,
    people,
    isVoting,
    sendVote,
    voteAgain,
    setActive,
  };
};

export default useSendVote;
