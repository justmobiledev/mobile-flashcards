import React, {useState, useContext} from 'react';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {textStyles} from '../styles/textStyles';
import {layoutStyles} from '../styles/layoutStyles';
import MyButton from './MyButton';
import colors from '../styles/colors.json';
import Toast from 'react-native-toast-message';
import {DeckContext} from '../contexts/useDeckContext';
import {isEmpty} from 'lodash/fp';

export default function Quizz({navigation}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const {selectedDeck} = useContext(DeckContext);
  const questions = selectedDeck ? selectedDeck.questions : [];
  const questionCount = questions?.length;
  const question = !isEmpty(questions) ? questions[questionIndex].question : '';
  const answer = !isEmpty(questions) ? questions[questionIndex].answer : '';

  const onNextPressed = () => {
    setShowAnswer(false);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
    else {
      setShowResults(true);
    }
  }

  const onShowAnswerPressed = () => {
    setShowAnswer(true);
  }

  const onAnswerCorrectPressed = () => {
    setCorrectCount(correctCount + 1);
    onNextPressed()
  }

  const onAnswerIncorrectPressed = () => {
    setIncorrectCount(incorrectCount + 1);
    onNextPressed()
  }

  const resetQuiz = () => {
    setShowResults(false);
    setShowAnswer(false);
    setCorrectCount(0);
    setIncorrectCount(0);
    setQuestionIndex(0);
  }

  const onRetakeQuizPressed = () => {
    resetQuiz();
  }

  const onReturnToDeckPressed = () => {
    resetQuiz();
    navigation.pop();
  }

  return (
    <SafeAreaView style={layoutStyles.screenLayout}>
      <View style={[layoutStyles.headerLayout,{flexDirection: 'column'}]}>
        <Text style={textStyles.headerStyle}>Quiz for deck: {selectedDeck?.title || ''}</Text>
        {!showResults && 
                <Text style={textStyles.headerStyle}>{questionCount - questionIndex} Questions remaining</Text>
        }
      </View>
      <View style={layoutStyles.contentLayout}>
        <View style={styles.questionLayout}>
          {
            !showResults && (
              <>
              <Text style={textStyles.titleStyle}>Question:</Text>
              <Text style={textStyles.bodyStyle}>{question}</Text>
              </>
            )
          }
            {showAnswer && (
              <View style={styles.answerLayout}>
                <Text style={textStyles.titleStyle}>Answer:</Text>
                <Text style={textStyles.bodyStyle}>{answer}</Text>
            </View>
            )}

            {showResults && (
              <>
              <Text style={textStyles.titleStyle}>You answered {correctCount} correctly - yay!</Text>
              <Text style={textStyles.titleStyle}>You answered {incorrectCount} incorrectly.</Text>
              </>
            )
          }
        </View>
          <View style={styles.buttonLayout}>
              {
                !showResults && !showAnswer && 
                <MyButton title="Show Answer" isPrimary={true} iconType='answer' onPress={onShowAnswerPressed}/>
              }
              {
                !showResults && showAnswer && (
                  <>
                    <MyButton title="Answer Correct" isPrimary={true} iconType='correct' onPress={onAnswerCorrectPressed}/>
                    <MyButton title="Answer Incorrect" isPrimary={false} iconType='wrong' onPress={onAnswerIncorrectPressed}/>
                  </>
                )
              }
              {
                showResults && 
                (
                  <>
                  <MyButton title="Retake Quizz" isPrimary={true} iconType='correct' onPress={onRetakeQuizPressed}/>
                  <MyButton title="Return to Deck" isPrimary={false} iconType='deck' onPress={onReturnToDeckPressed}/>
                </>
                )
              }
          </View>
        </View>
        <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  questionLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  answerLayout: {
    marginTop: 12,
  },
  buttonLayout: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: colors.gray,
    marginTop: 16
  }
});
