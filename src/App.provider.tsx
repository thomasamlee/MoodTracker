import React, {PropsWithChildren} from 'react';
import {MoodOptionWithTimestamp, MoodOptionType} from './types';

type AppContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: (mood: MoodOptionType) => void;
};

const AppContext = React.createContext<AppContextType>([]);

export const AppProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [moodList, setMoodList] = React.useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = React.useCallback((mood: MoodOptionType) => {
    setMoodList(current => [...current, {mood, timestamp: Date.now()}]);
  }, []);

  return (
    <AppContext.Provider value={{moodList, handleSelectMood}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
