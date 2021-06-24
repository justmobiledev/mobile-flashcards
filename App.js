import React, {useEffect} from 'react';
import { Text, TouchableOpacity, StyleSheet, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {MainStackNavigator} from './src/navigation';
import decks from './src/storage/decks.json';
import {setDecks} from './src/storage/storageHelper';

import {DeckList, AddDeck} from './src/components';


export default function App() {

  useEffect(() => {
    // Load initial data
    setDecks(decks).catch((error) => {
      console.log('Failed to load initial data: '+error);
    })
  },[]);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainStackNavigator/>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
