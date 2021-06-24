import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getDecks } from '../storage/storageHelper';
import {convertToArray} from '../utils/utils';
import colors from '../styles/colors.json';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

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

  /*
                <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>

                  <View>
                     <Text>ID: {item.id}</Text>
                     <Text>Title: {item.title}</Text>
                  </View>

             </TouchableWithoutFeedback> 
  */

  const renderDeck = it => {
    const deck = it.item;
    console.log(deck);
    return (
      <View style={styles.deckItemLayout}>
        <MaterialCommunityIcons style={styles.deckItemStyle} name="cards" size={24} color="gray" />
        <Text style={styles.titleStyle}>{deck.title}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
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
  deckItemLayout: {
    flexDirection: 'row',
    padding: 24,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  deckItemStyle: {
    marginRight: 8
  },
  titleStyle: {
    color: colors.textColor
  }
});
