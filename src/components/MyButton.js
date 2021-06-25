import React from 'react';
import { TouchableOpacity, View,StyleSheet, Text} from 'react-native';
import colors from '../styles/colors.json';
import {textStyles} from '../styles/textStyles';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

export default function MyButton({title, isPrimary, iconType, onPress}) {
    const backgroundColor = isPrimary ? colors.teal : colors.orange;

    const renderIcon = (iconType) => {
        if (iconType === 'quiz') {
            return <AntDesign name="questioncircleo" size={20} color="white" />
        }
        else if (iconType === 'add') {
            return <AntDesign name="pluscircleo" size={20} color="white" />
        }
        else if (iconType === 'save') {
            return <AntDesign name="save" size={20} color="white" />
        }
        else if (iconType === 'answer') {
            return <MaterialIcons name="question-answer" size={20} color="white" />
        }
        else if (iconType === 'next') {
            return <MaterialIcons name="navigate-next" size={20} color="white" />
        }
        else if (iconType === 'wrong') {
            return <MaterialIcons name="mood-bad" size={20} color="white" />
        }
        else if (iconType === 'correct') {
            return <Ionicons name="checkmark-circle-outline" size={20} color="white" />
        }      
        else {
            return null;
        }
    }

  return (
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={onPress}>
            <View style={{marginTop: 4}}>
            {
                renderIcon(iconType)
            }
            </View>
            <Text style={[textStyles.buttonTextStyle, {marginLeft: 12}]}>{title}</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    height: 60,
    minWidth: 340,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    elevation: 3
  },
});
