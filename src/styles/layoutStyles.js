import { StyleSheet } from 'react-native';
import colors from './colors.json';

export const layoutStyles = StyleSheet.create({
    screenLayout: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    headerLayout: {
      flexDirection: 'row',
      minHeight: 60,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.darkBlue
    },
    contentLayout: {
        flex: 1,
        padding: 32
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