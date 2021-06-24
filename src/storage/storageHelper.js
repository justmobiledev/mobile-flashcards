import AsyncStorage from '@react-native-community/async-storage';

const DECKS = "@MobileFlashcards:DECKS";

// loads the initial decks database
export const setDecks = (decks) => {
    return new Promise(async(resolve, reject) => {
        try {
            await AsyncStorage.setItem(
                DECKS,
                JSON.stringify(decks)
            );
            resolve();
        } catch (error) {
            console.log('error loading data: '+error);
            reject(error);
        }
    });
}

// return all of the decks along with their titles, questions, and answers
export const getDecks = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const decks = await AsyncStorage.getItem(DECKS);
            if (decks !== null) {
                // Convert to object
                resolve(JSON.parse(decks));
            }
        } catch (error) {
            console.log('error retrieving data: '+error);
            reject(error);
        }
    });
}

// take in a single id argument and return the deck associated with that id
export const getDeck = async (id) => {
    
}

// take in a single title argument and add it to the decks
export const saveDeckTitle = async (id, title) => {
    try {
        await AsyncStorage.setItem(
            DECKS,
          'I like to save it.'
        );
      } catch (error) {
        // Error saving data
      }
}

// take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title
export const addCardToDeck = async(title, card) => {
    try {
        await AsyncStorage.setItem(
          '@MySuperStore:key',
          'I like to save it.'
        );
      } catch (error) {
        // Error saving data
      }
}