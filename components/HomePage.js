import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Header';
import StoriesList from './StoriesList';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Header />
      <StoriesList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
