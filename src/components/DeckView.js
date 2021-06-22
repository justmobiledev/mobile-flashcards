import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DeckView() {
  return (
    <View style={styles.container}>
      <Text>DeckView</Text>
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
