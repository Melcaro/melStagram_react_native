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
import beach from '../assets/beach.webp';
import { MaterialCommunityIcons,Feather,FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const postsList = new Array(50).fill({
  userName: 'Mel',
  profilePic: fatChoco,
  imagePost: beach,
  legend: "LET'S GO TO THE BEAAACH!!",
});

export default function TimeLine() {
  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.userIdentity}>
        <Image style={styles.userPic} resizeMode="cover" source={item.profilePic} />
        <Text style={styles.userName}>{item.userName}</Text>
        <MaterialCommunityIcons style={styles.verticalMenu} name="dots-vertical" size={24} color="white" />
      </View>
      <Image style={styles.postImage} resizeMode="cover" source={item.imagePost} />
      <View style={styles.iconsContainer}>
        <FontAwesome5 style={styles.reactIcons} name="heart" size={24} color="white" />
        <SimpleLineIcons style={styles.reactIcons} name="bubble" size={24} color="white" />
        <Feather style={styles.reactIcons} name="send" size={24} color="white" />
        <Feather style={styles.bookMarkIcon} name="bookmark" size={24} color="white" />
      </View>
      <View style={styles.legendContainer}>
        <Text style={styles.userName}>{item.userName}</Text>
        <Text style={styles.text}>{item.legend}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={postsList}
        renderItem={renderItem}
        keyExtractor={(item,i) => i+''}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  postContainer:{
    flex:1,
    justifyContent: 'flex-start',
    marginBottom:30,
  },
  userIdentity:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    paddingLeft:1,
  },
  userPic:{
    width: screenWidth * 0.12,
    height: screenWidth * 0.12,
    borderRadius: 100,
    marginHorizontal: 10,
  },
  verticalMenu:{
    position:'absolute',
    left:320,
  },
  postImage:{
    marginVertical: 10,
    height: screenWidth * 0.8,
  },
  iconsContainer:{
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    marginBottom:10,
    paddingLeft:10,
  },
  reactIcons:{
    marginHorizontal:8,
  },
  bookMarkIcon:{
    position:'absolute',
    left:320,
  },
  legendContainer:{
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    paddingLeft:15,
  },
  userName:{
    color:'white',
    fontWeight:'bold',
    marginRight:10,
  }
});
