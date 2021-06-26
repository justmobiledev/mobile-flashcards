import React, {createContext, useState} from 'react';
import {dbSetDecks, dbAddCardToDeck, dbAddDeck} from '../storage/storageHelper';
import starterDecks from '../storage/starterDecks.json';
import {convertToArray} from '../utils/utils';

export const DeckContext = createContext();

export function useDeckContext() {
    const [isLoading, setIsLoading] = useState(false);
    const [decks, setDecks] = useState([]);
    const [selectedDeck, setSelectedDeck] = useState(undefined);

    const loadDecks = () => {
        setIsLoading(true);

        // Load decks into database
        dbSetDecks(starterDecks).then(() => {
            const _decks = convertToArray(starterDecks);
            setDecks(_decks);
            setIsLoading(false);
        }).catch((error) => {
            console.log(error);
            setIsLoading(false);
          })
    };

    const addCartToDeck = (title, card) => {
        return new Promise((resolve, reject) => {
            setIsLoading(true);
            dbAddCardToDeck(title, card).then((decks) => {
                const _decks = convertToArray(decks);
                setDecks(_decks);
                const _selectedDeck = decks[title];
                setSelectedDeck(_selectedDeck);
                setIsLoading(false);
                resolve();
            }).catch((error) => {
                console.log(error);
                setIsLoading(false);
                reject(error);
            });
        });
    }

    const addDeck = (title) => {
        return new Promise((resolve, reject) => {
            setIsLoading(true);
            dbAddDeck(title).then((decks) => {
                const _decks = convertToArray(decks);
                setDecks(_decks);
                setIsLoading(false);
                resolve();
            }).catch((error) => {
                console.log(error);
                setIsLoading(false);
                reject(error);
            });
        });
    } 

    return {
        isLoading, 
        decks,
        selectedDeck,
        loadDecks,
        addCartToDeck,
        setSelectedDeck,
        addDeck,
    }
}