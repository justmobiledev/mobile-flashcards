import React, {useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {MainStackNavigator} from './src/navigation';
import Spinner from 'react-native-loading-spinner-overlay';
import {useDeckContext, DeckContext} from './src/contexts/useDeckContext';

export default function App() {
  const {isLoading, decks, selectedDeck, addDeck, setSelectedDeck, loadDecks, addCartToDeck} = useDeckContext();

  useEffect(() => {
    // Load initial data
    loadDecks();
  },[]);

  return (
    <DeckContext.Provider value={{ isLoading, decks, selectedDeck, addDeck, setSelectedDeck, addCartToDeck }}>
      <View style={styles.container}>
        <NavigationContainer>
          <MainStackNavigator/>
        </NavigationContainer>
        {
          isLoading && 
            <Spinner
            visible={true}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
        }
      </View>
    </DeckContext.Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  spinnerTextStyle: {
    fontSize: 12, 
  }
});
