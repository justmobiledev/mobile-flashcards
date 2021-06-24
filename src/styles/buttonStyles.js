import { StyleSheet } from 'react-native';
import colors from './colors.json';

export const buttonStyles = StyleSheet.create({
    primaryButton: {
        backgroundColor: colors.teal,
        flex: 1,
    },
    secondaryButton: {
        flex: 1,
        backgroundColor: colors.orange
    },  
  });