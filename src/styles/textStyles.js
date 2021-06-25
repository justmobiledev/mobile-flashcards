
import { StyleSheet } from 'react-native';
import colors from './colors.json';

export const textStyles = StyleSheet.create({
  headerStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
    largeTitleStyle: {
      fontSize: 24,
      color: colors.titleColor,
      fontWeight: 'bold',
  },
  largeSubTitleStyle: {
    fontSize: 16,
    color: colors.bodyColor,
},
    titleStyle: {
        fontSize: 20,
      color: colors.titleColor
    },
    bodyStyle: {
        fontSize: 16,
      color: colors.bodyColor,
    },
    buttonTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
      }
  });