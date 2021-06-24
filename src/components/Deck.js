import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import colors from '../styles/colors.json';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {textStyles} from '../styles/textStyles';
import {layoutStyles} from '../styles/layoutStyles';
import MyButton from './MyButton';
import {ADD_QUESTION_SCREEN, QUIZ_SCREEN} from '../navigation/ScreenNames';

export default function Deck({route, navigation}) {
  const {deck} = route.params;
  const questionCount = deck?.questions?.length || 0;

  const onAddQuestionPressed = () => {
      // Navigate to Add Question
    navigation.navigate(ADD_QUESTION_SCREEN,{deck: deck});
  }

  const onStartQuizPressed = () => {
      // Navigate to Start Quiz
      navigation.navigate(QUIZ_SCREEN,{deck: deck});
  }

  return (
    <SafeAreaView style={layoutStyles.screenLayout}>
      <View style={layoutStyles.headerLayout}>
        <Text style={textStyles.headerStyle}>Deck: {deck?.title || ''}</Text>
      </View>
      <View style={layoutStyles.contentLayout}>
        <View style={styles.deckInfoLayout}>
            <Text style={textStyles.largeTitleStyle}>{deck?.title || ''}</Text>
            <Text style={textStyles.largeSubTitleStyle}>{questionCount} Questions</Text>
          </View>
          <View style={styles.buttonLayout}>
            <MyButton title="Add Question" isPrimary={true} iconType='add' onPress={onAddQuestionPressed}/>
            <MyButton title="Start Quiz" isPrimary={false} iconType='quiz' onPress={onStartQuizPressed}/>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  deckInfoLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLayout: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
  }
});
