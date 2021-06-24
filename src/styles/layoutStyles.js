import { StyleSheet } from 'react-native';
import colors from './colors.json';

export const layoutStyles = StyleSheet.create({
    headerLayout: {
      flexDirection: 'row',
      minHeight: 40,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.titleColor
    },
    listItemLayout: {
        flexDirection: 'column',
        padding: 24,
        borderBottomColor: colors.gray,
        borderBottomWidth: 1,
        alignItems: 'flex-start'
      },
    rowStyle: {
    flexDirection: 'row',
    alignItems: 'center'
    },
  });