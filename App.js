import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {MainStackNavigator} from './src/navigation';

import {DeckList, AddDeck} from './src/components';


export default function App() {
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
