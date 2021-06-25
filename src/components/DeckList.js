import React, {useContext} from 'react';
import { SafeAreaView, FlatList, StyleSheet, Image, Text, View } from 'react-native';
import {textStyles} from '../styles/textStyles';
import {layoutStyles} from '../styles/layoutStyles';
import DeckListItem from './DeckListItem';
import {DECK_SCREEN} from '../navigation/ScreenNames';
import {isEmpty} from 'lodash/fp';
import {DeckContext} from '../contexts/useDeckContext';


export default function DeckList({navigation}) {
  //const context = useSharedDeckContext();
  const { isLoading, decks, setSelectedDeck } = useContext(DeckContext);

  console.log(isLoading);
  console.log('DeckList decks: ',decks);

 const _onItemClicked = deck => {
   setSelectedDeck(deck.item);
  // Navigate to deck details
   navigation.navigate(DECK_SCREEN);
 }

  const renderDeck = it => {
    const deck = it.item;
    console.log('renderDeck ',deck);
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
      {
        !isEmpty(decks) && (
          <FlatList
          data={decks}
          renderItem={renderDeck}
          keyExtractor={item => item.title}
        />
        )
      }


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
