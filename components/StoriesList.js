import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import fatChoco from '../assets/fatChoco.jpg';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const stories = new Array(50).fill({ userName: 'Mel', profilePic: fatChoco });

export default function StoriesList() {
  const renderItem = ({ item }) => (
    <View style={styles.storyContainer}>
      <Image resizeMode="cover" style={styles.image} source={item.profilePic} />
      <Text style={styles.name}>{item.userName}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.storiesList}
        horizontal
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  storiesList: {
    borderColor: 'orange',
    borderWidth: 1,
  },
  storyContainer: {
    borderColor: 'blue',
    borderWidth: 1,
    justifyContent: 'flex-start',
    flex: 1,
    height: 100,
    marginHorizontal: 10,
  },
  name: {
    color: 'white',
    borderColor: 'yellow',
    borderWidth: 1,
  },
  image: {
    width: screenWidth * 0.15,
    height: screenWidth * 0.15,
    borderRadius: 100,
  },
});