import React, {useContext} from 'react';
import { useDeckContext } from './useDeckContext';

export const AppContext = React.createContext({});
AppContext.displayName = 'AppContext';

export const AppProvider = ({children}) => (
    <AppContext.Provider
        value={{
            deckContext: useDeckContext(),
        }}>
        {children}
    </AppContext.Provider>
);

export function useAppContext() {
    return useContext(AppContext);
}

export function useSharedDeckContext() {
    return useAppContext().deckContext || useDeckContext();
}