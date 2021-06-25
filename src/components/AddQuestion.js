import React, {useState, useContext} from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput} from 'react-native';
import {textStyles} from '../styles/textStyles';
import {layoutStyles} from '../styles/layoutStyles';
import MyButton from './MyButton';
import colors from '../styles/colors.json';
import Toast from 'react-native-toast-message';
import {DeckContext} from '../contexts/useDeckContext';

export default function AddQuestion({navigation}) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const {selectedDeck, addCartToDeck} = useContext(DeckContext);

  const onChangeQuestion = (value) => {
    setQuestion(value);
  }

  const onChangeAnswer = (value) => {
    setAnswer(value);
  }

  const onSavePressed = () => {
    const card = {question: question, answer: answer};
    addCartToDeck(selectedDeck.title, card).then(() => {
      Toast.show({
        position: 'bottom',
        text1: 'Card saved successfully 👋',
        visibilityTime: 500,
      });
      setTimeout(() => {
        navigation.pop();
      },1000);
    }).catch((error) => {
      Toast.show({
        position: 'bottom',
        text1: 'Failed to save card',
        visibilityTime: 500,
      });
    });
  }

  return (
    <SafeAreaView style={layoutStyles.screenLayout}>
      <View style={layoutStyles.headerLayout}>
        <Text style={textStyles.headerStyle}>Add a questions for deck: {selectedDeck?.title || ''}</Text>
      </View>
      <View style={layoutStyles.contentLayout}>
        <View style={styles.questionLayout}>
          <Text style={textStyles.titleStyle}>Ask your question:</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={onChangeQuestion}
              value={question}
              placeholder="Ask a question"
              keyboardType="default"
            />
            <Text style={[textStyles.titleStyle,{marginTop: 24}]}>Add your answer:</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={onChangeAnswer}
              value={answer}
              placeholder="Add an answer"
              keyboardType="default"
            />
          </View>
          <View style={styles.buttonLayout}>
            <MyButton title="Save" isPrimary={true} iconType='save' onPress={onSavePressed}/>
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
