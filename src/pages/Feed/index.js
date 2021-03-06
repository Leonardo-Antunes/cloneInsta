import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Feed!</Text>
    </View>
  );
}
