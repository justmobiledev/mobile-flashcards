import AsyncStorage from '@react-native-community/async-storage';

const DECKS = "@MobileFlashcards:DECKS";
const QUIZ_COMPLETED = "@MobileFlashcards:QUIZ_COMPLETED";

// loads the initial decks database
export const dbSetDecks = (decks) => {
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
export const dbGetDecks = () => {
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
export const dbGetDeck = async (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            dbGetDecks().then((decks) => {
                const deck = decks[id];
                resolve(deck);
            }).catch((error) => {
                console.log('Unable to load decks: '+error);
                reject(error);
            });
        } catch (error) {
            console.log('Failed to get decks, error: '+error);
            reject(error);
        }
    });
}

// take in a single title argument and add it to the decks
export const dbAddDeck = async (title) => {
    return new Promise((resolve, reject) => {
        try {
            dbGetDecks().then((decks) => {
                const newDeck = {title: title, questions: []};
                let updatedDecks = {...decks};
                updatedDecks[title] = newDeck;
    
                // Save decks
                dbSetDecks(updatedDecks).then(() => {
                    console.log('Decks saved successfully');
                    resolve(updatedDecks);
                }).catch((error) => {
                    console.log('Failed to save decks, error: '+error);
                    reject(error);
                });
              }).catch((error) => {
                console.log('Unable to load decks: '+error);
                reject(error);
              });
          } catch (error) {
            console.log('Failed to get decks, error: '+error);
            reject(error);
          }
    });
}

// take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title
export const dbAddCardToDeck = async(title, card) => {
    return new Promise((resolve, reject) => {
        try {
            dbGetDecks().then((decks) => {
                const deck = decks[title];
                if (deck) {
                    // add question
                    deck.questions.push(card);
                }
                let updatedDecks = {...decks};
                updatedDecks[title] = deck;
    
                // Save decks
                dbSetDecks(updatedDecks).then(() => {
                    console.log('Card saved successfully');
                    resolve(updatedDecks);
                }).catch((error) => {
                    console.log('Failed to save decks, error: '+error);
                    reject(error);
                });
              }).catch((error) => {
                console.log('Unable to load decks: '+error);
                reject(error);
              });
          } catch (error) {
            console.log('Failed to get decks, error: '+error);
            reject(error);
          }
    });
}

// Set's the 'Quiz completed flag'
export const dbSetQuizCompleted = (flag) => {
    return new Promise(async(resolve, reject) => {
        try {
            await AsyncStorage.setItem(
                QUIZ_COMPLETED,
                flag ? 'true' : 'false'
            );
            resolve();
        } catch (error) {
            console.log('error setting flag: '+error);
            reject(error);
        }
    });
}

// Gets's the 'Quiz completed flag'
export const dbGetQuizCompleted = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const res = await AsyncStorage.getItem(
                QUIZ_COMPLETED
            );
            const quizCompleted = res === 'true' ? true : false;
            resolve(quizCompleted);
        } catch (error) {
            console.log('error setting flag: '+error);
            reject(error);
        }
    });
}