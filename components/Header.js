import React from 'react';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <AntDesign name="instagram" size={24} color="white" />
        <Text style={styles.text}>Melstagram</Text>
      </View>
      <View style={styles.iconsContainer}>
        <Entypo name="magnifying-glass" size={24} color="white" />
        <Feather name="send" size={24} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: screenWidth,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 30,
    padding: 2,
    borderColor: 'red',
    borderWidth: 1,
  },
  titleContainer: {
    width: '40%',
    margin: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconsContainer: {
    width: '15%',
    margin: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 5,
  },
});
