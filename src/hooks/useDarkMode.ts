import { useEffect, useState } from 'react';

import { LOCAL_STORAGE_KEYS } from '../types/enums';
import {
  getLocalStorage,
  setLocalStorage,
} from '../utils/localStorage.utilily';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const setMode = (mode: 'light' | 'dark') => {
    setLocalStorage(LOCAL_STORAGE_KEYS.THEME, mode);
    setTheme(mode);
  };

  const toggleTheme = () =>
    theme === 'light' ? setMode('dark') : setMode('light');

  useEffect(() => {
    const localTheme = JSON.parse(
      getLocalStorage(LOCAL_STORAGE_KEYS.THEME) as string
    );

    if (localTheme) setTheme(localTheme);
  }, []);

  return { theme, toggleTheme };
};

export default useDarkMode;
