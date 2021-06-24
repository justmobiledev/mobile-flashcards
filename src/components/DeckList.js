import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getDecks } from '../storage/storageHelper';
import {convertToArray} from '../utils/utils';
import colors from '../styles/colors.json';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {textStyles} from '../styles/textStyles';
import {layoutStyles} from '../styles/layoutStyles';
import {DeckListItem} from './index'

export default function DeckList() {
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
 }

  const renderDeck = it => {
    const deck = it.item;

    return (
      <DeckListItem deck={deck} onItemClicked={() => _onItemClicked(it)}/>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={layoutStyles.headerLayout}>
        <Text style={textStyles.headerStyle}>Deck List</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
