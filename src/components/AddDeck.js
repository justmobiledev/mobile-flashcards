import React, {useState, useContext} from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput} from 'react-native';
import {textStyles} from '../styles/textStyles';
import {layoutStyles} from '../styles/layoutStyles';
import MyButton from './MyButton';
import colors from '../styles/colors.json';
import Toast from 'react-native-toast-message';
import {DeckContext} from '../contexts/useDeckContext';

export default function AddDeck({navigation}) {
  const [title, setTitle] = useState('');
  const {addDeck} = useContext(DeckContext);

  const onChangeTitle = (value) => {
    setTitle(value);
  }

  const onSavePressed = () => {
    addDeck(title).then(() => {
      Toast.show({
        position: 'bottom',
        text1: 'Deck saved successfully 👋',
        visibilityTime: 500,
      });
    }).catch((error) => {
      Toast.show({
        position: 'bottom',
        text1: 'Failed to save deck',
        visibilityTime: 500,
      });
    });
  }

  return (
    <SafeAreaView style={layoutStyles.screenLayout}>
      <View style={layoutStyles.headerLayout}>
        <Text style={textStyles.headerStyle}>Add a new Deck</Text>
      </View>
      <View style={layoutStyles.contentLayout}>
        <View style={styles.deckLayout}>
          <Text style={textStyles.titleStyle}>Add a title:</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={onChangeTitle}
              value={title}
              placeholder="Add a title"
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
  deckLayout: {
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

