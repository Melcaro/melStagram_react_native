import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Header';
import StoriesList from './StoriesList';
import TimeLine from './TimeLine';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Header />
      <StoriesList />
      <TimeLine />
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
