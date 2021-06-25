import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {textStyles} from '../styles/textStyles';
import {layoutStyles} from '../styles/layoutStyles';

export default function DeckListItem({onItemClicked, deck}) {
  const title = deck ? deck.title : '';
  const questionCount = deck ? deck.questions.length : 0;

  return (
    <TouchableOpacity onPress={ () => onItemClicked(deck)}>
    <View style={layoutStyles.listItemLayout}>
      <View style={layoutStyles.rowStyle}>
        <MaterialCommunityIcons name="cards" size={24} color="gray" />
        <Text style={[textStyles.titleStyle,{marginLeft: 4}]}>{title}</Text>
      </View>
      <View style={[layoutStyles.rowStyle,{marginLeft: 30}]}>
        <Text style={textStyles.bodyStyle}>{questionCount} Questions</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
}
