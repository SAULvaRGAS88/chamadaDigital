
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../componentes/Button';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {

  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate('LoginScreen')
  };

  return (
    <View style={styles.container}>
      <Button text='Iniciar' onPress={handlePress} />
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    top: 700
    
  }
})
