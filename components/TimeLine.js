import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';

import fatChoco from '../assets/fatChoco.jpg';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const postsList = new Array(50).fill({
  userName: 'Mel',
  profilePic: fatChoco,
  imagePost: '',
  legend: "LET'S GO TO THE BEAAACH!!",
});

export default function TimeLine() {
  const renderItem = ({ item }) => (
    <View>
      <View>
        <Image resizeMode="cover" source={item.profilePic} />
        <Text style={styles.text}>{item.userName}</Text>
      </View>
      <Image resizeMode="cover" source={item.imagePost} />
      <Text style={styles.text}>{item.legend}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={postsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'yellow',
    borderWidth: 1,
  },
  text: {
    color: 'white',
  },
});
