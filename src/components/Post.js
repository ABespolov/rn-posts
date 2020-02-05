import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';

export const Post = ({onOpen}) => {
  return (
    <TouchableOpacity onPress={() => onOpen()}>
      <View style={styles.post}>
        <ImageBackground style={styles.image}
                         source={{uri: 'https://img.huffingtonpost.com/asset/5dcc613f1f00009304dee539.jpeg'}}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Cat</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  post: {
    flexGrow: 1
  },
  textContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 40,
    color: '#fff',
    fontFamily: 'open-bold'
  }
});
