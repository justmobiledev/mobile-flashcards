import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';
import {AddDeck, AddQuestion, DeckList, Deck, Quiz} from '../components';

  
const Stack = createStackNavigator();
  
  export default function MainStackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={MainTabNavigator} />
        <Stack.Screen name="AddDeck" component={AddDeck} />
        <Stack.Screen name="AddQuestion" component={AddQuestion} />
        <Stack.Screen name="DeckList" component={DeckList} />
        <Stack.Screen name="Deck" component={Deck} />
        <Stack.Screen name="Quiz" component={Quiz} />
      </Stack.Navigator>
    );
  }