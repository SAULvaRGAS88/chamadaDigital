
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Button = ({ text, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textBtn}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },

  button: {
    width: 250,
    height: 60,
    borderRadius: 25,
    backgroundColor: '#9B4F4F',
    justifyContent: "center",
    alignItems: "center"
  },
  textBtn:{
    color: '#fff',
    fontSize: 28
  }
});
