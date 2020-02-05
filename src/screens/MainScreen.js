import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Post} from "../components/Post";

export const MainScreen = ({navigation}) => {
  const goToPost = () => {
    navigation.navigate('Post', {postId: 1});
  };

  return (
    <View>
      <Post onOpen={goToPost}/>
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: 'Мой блог'
};

const styles = StyleSheet.create({

});
