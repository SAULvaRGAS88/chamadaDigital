
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../componentes/Button'
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {

  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const navigation = useNavigation()

  const handlePresslogin = () => {
    if (usuario === '' && senha === '') {
      console.log('logando...')
      navigation.navigate('DashScreen')
    } else {
      console.log('senha errada')
    }

  }
  return (
    <View style={styles.container}>

      <View style={styles.containerLogin}>
        <TextInput
          label="Login"
          value={usuario}
          onChangeText={text => setUsuario(text)}
        />
      </View>

      <View style={styles.containerSenha}>
        <TextInput
          label="Senha"
          value={senha}
          onChangeText={text => setSenha(text)}
          right={<TextInput.Icon icon="eye" />}
        />
      </View>

      <View style={styles.containerEntrar}>
        <Button text='Entrar' onPress={handlePresslogin} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  containerEntrar: {
    position: 'absolute',
    top: 700
  },
  containerLogin: {
    marginTop: 0,
    height: 115,
    width: 250,
    position: 'absolute',
    top: 450
  },
  containerSenha: {
    marginTop: 0,
    height: 115,
    width: 250,
    position: 'absolute',
    top: 550
  },
})
