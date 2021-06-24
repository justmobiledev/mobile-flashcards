
import { StyleSheet } from 'react-native';
import colors from './colors.json';

export const textStyles = StyleSheet.create({
  headerStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
    titleStyle: {
        fontSize: 14,
      color: colors.titleColor
    },
    bodyStyle: {
        fontSize: 12,
      color: colors.bodyColor,
      }
  });