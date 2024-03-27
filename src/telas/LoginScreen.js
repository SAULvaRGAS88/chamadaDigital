
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Button } from '../componentes/Button'
// import { TextInput } from 'react-native-paper';
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
        <Text style={styles.textView}>Login</Text>
        <TextInput
          label="Login"
          value={usuario}
          onChangeText={text => setUsuario(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.containerSenha}>
        <Text style={styles.textView}>Senha</Text>
        <TextInput
          label="Senha"
          value={senha}
          onChangeText={text => setSenha(text)}
          style={styles.input}
        // right={<TextInput.Icon icon="eye" />}
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
    top: 450,
    alignItems: 'center'
  },
  containerSenha: {
    marginTop: 0,
    height: 115,
    width: 250,
    position: 'absolute',
    top: 550,
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#333",
    borderRadius: 10,
    width: "90%",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 9.84,
    elevation: 9,
  },
  textView: {
    alignSelf: 'stretch',
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 16
  }
})
