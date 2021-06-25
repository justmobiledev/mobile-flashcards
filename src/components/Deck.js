import React, {useContext} from 'react';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {textStyles} from '../styles/textStyles';
import {layoutStyles} from '../styles/layoutStyles';
import MyButton from './MyButton';
import {ADD_QUESTION_SCREEN, QUIZ_SCREEN} from '../navigation/ScreenNames';
import {DeckContext} from '../contexts/useDeckContext';

export default function Deck({navigation}) {
  const { selectedDeck } = useContext(DeckContext);
  const questionCount = selectedDeck?.questions?.length || 0;

  const onAddQuestionPressed = () => {
      // Navigate to Add Question
    navigation.navigate(ADD_QUESTION_SCREEN);
  }

  const onStartQuizPressed = () => {
      // Navigate to Start Quiz
      navigation.navigate(QUIZ_SCREEN);
  }

  return (
    <SafeAreaView style={layoutStyles.screenLayout}>
      <View style={layoutStyles.headerLayout}>
        <Text style={textStyles.headerStyle}>Deck: {selectedDeck?.title || ''}</Text>
      </View>
      <View style={layoutStyles.contentLayout}>
        <View style={styles.deckInfoLayout}>
            <Text style={textStyles.largeTitleStyle}>{selectedDeck?.title || ''}</Text>
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
