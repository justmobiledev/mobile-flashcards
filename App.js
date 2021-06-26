import React, {useEffect} from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {MainStackNavigator} from './src/navigation';
import {useDeckContext, DeckContext} from './src/contexts/useDeckContext';
import {requestNotificationPermisssions, runNotificationReminderCheck} from './src/notifications/NotificationManager';

export default function App() {
  const {isLoading, decks, selectedDeck, addDeck, setSelectedDeck, loadDecks, addCartToDeck} = useDeckContext();

  useEffect(() => {
    // Load initial data
    loadDecks();

    // Run Quiz permission check
    /* if (Platform.OS === 'ios') {
      requestNotificationPermisssions();
    }
    else if (Platform.OS === 'android'){
      runNotificationReminderCheck();
    }*/
    //runNotificationReminderCheck();
    requestNotificationPermisssions();
  },[]);

  return (
    <DeckContext.Provider value={{ isLoading, decks, selectedDeck, addDeck, setSelectedDeck, addCartToDeck }}>
      <View style={styles.container}>
        <NavigationContainer>
          <MainStackNavigator/>
        </NavigationContainer>
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
