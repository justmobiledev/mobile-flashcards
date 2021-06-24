import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AddQuestion({route, navigation}) {
  const {deck} = route.params;
  
  return (
    <View style={styles.container}>
      <Text>AddQuestion</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
