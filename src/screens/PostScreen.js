import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {MainScreen} from "./MainScreen";

export const PostScreen = ({navigation}) => {
  const postId = navigation.getParam('postId');
  //const post = DATA.find(p => p.id === postId);
  const onClick = () => {
    navigation.setParams({postId: 11111});
  };

  return (
    <View>
      <Text>PostScreen {postId}</Text>
      <Button title="Click me" onPress={onClick}></Button>
    </View>
  );
};

PostScreen.navigationOptions = ({navigation}) => {
  const postId = navigation.getParam('postId');

  return {
    headerTitle: `Пост ${postId}`,
    headerStyle: {
      backgroundColor: 'red'
    }
  }
};

const styles = StyleSheet.create({

});
