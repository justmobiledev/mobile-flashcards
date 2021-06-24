import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';
import {AddDeck, AddQuestion, DeckList, Deck, Quiz} from '../components';
import {MAIN, DECK_LIST_SCREEN, DECK_SCREEN, ADD_DECK_SCREEN, QUIZ_SCREEN, ADD_QUESTION_SCREEN} from './ScreenNames';

  
const Stack = createStackNavigator();
  
  export default function MainStackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name={MAIN} component={MainTabNavigator} />
        <Stack.Screen name={ADD_DECK_SCREEN} component={AddDeck} />
        <Stack.Screen name={ADD_QUESTION_SCREEN} component={AddQuestion} />
        <Stack.Screen name={DECK_LIST_SCREEN} component={DeckList} />
        <Stack.Screen name={DECK_SCREEN} component={Deck} />
        <Stack.Screen name={QUIZ_SCREEN} component={Quiz} />
      </Stack.Navigator>
    );
  }