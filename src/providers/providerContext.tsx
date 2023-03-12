import { createContext, useMemo, useReducer, useState } from 'react'
import { useColorScheme } from 'react-native'

import { Loaders } from '@components'

import type { Task } from '../interfaces'

const AppContext = createContext();
const AppProvider = ({ children }: any) => {
  const scheme = useColorScheme();
  const [dark, darkTheme] = useState(scheme === 'dark');
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(
    (prevState: [], action: { type: string, task: Task }) => {
      switch (action.type) {
        case 'ADD':
          action.task.completed = false;
          return [
            ...prevState,
            action.task,
          ]
        case 'COMPLETE':
          const filtered: Task | undefined = prevState.find((tasks: Task) => tasks.id === action.task.id)
          if (filtered) {
            prevState[prevState.indexOf(filtered)].completed = !filtered.completed
          }
          return [...prevState]
        case 'REMOVE':
          const filtering: [Task] = prevState.filter((tasks: Task) => tasks.id !== action.task.id)
          return filtering
        default: return prevState
      }
    }, []
  )

  const values = useMemo(
    () => ({
      darkTheme,
      setLoading,
    }),
    [],
  );
  if (loading) {
    return <Loaders.Default />;
  }

  return (
    <AppContext.Provider
      value={{
        ...values,
        dark,
        state,
        dispatch,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider }

