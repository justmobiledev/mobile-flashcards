import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getDecks } from '../storage/storageHelper';
import {convertToArray} from '../utils/utils';
import colors from '../styles/colors.json';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {textStyles} from '../styles/textStyles';
import {layoutStyles} from '../styles/layoutStyles';
import {DeckListItem} from './index';
import {DECK_SCREEN} from '../navigation/ScreenNames';

export default function DeckList({navigation}) {
  const [decks, setDecks] = useState(undefined);

  useEffect(() => {
    getDecks().then((dbDecks) => {
      const _decks = convertToArray(dbDecks);
      setDecks(_decks);
    }).catch((error) => {
      console.log('Unable to load decks: '+error);
    })
  },[]);

 const _onItemClicked = deck => {
  // Navigate to deck details
   navigation.navigate(DECK_SCREEN,{deck: deck.item});
 }

  const renderDeck = it => {
    const deck = it.item;

    return (
      <DeckListItem deck={deck} onItemClicked={() => _onItemClicked(it)}/>
    )
  }

  return (
    <SafeAreaView style={layoutStyles.screenLayout}>
      <View style={layoutStyles.headerLayout}>
        <Text style={textStyles.headerStyle}>Deck List</Text>
      </View>
      <View style={styles.mainImageContainer}>
        <Image style={styles.mainImageStyle} source={require('../assets/flashcards_image.jpeg')}/>
      </View>
      <FlatList
        data={decks}
        renderItem={renderDeck}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainImageContainer: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
  },
  mainImageStyle: {
    flex: 1, 
    height: 300, 
    width: '100%',
    resizeMode: 'contain'
  },
});
