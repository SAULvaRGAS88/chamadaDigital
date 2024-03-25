import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../componentes/Button'

export const ScanerScreen = () => {

    const handleScarner = () => {
        console.log('foto capturada')
    };

    const handlePresenca = () => {
        console.log('Confirmar Presença')
    };

    const handleEnviar = () => {
        console.log('Presença enviada')
    };

    return (

        <View style={styles.container}>

            <View style={styles.viewPresenca}>
                <Button text='Presença Aluno' onPress={handlePresenca} />
            </View>

            <View style={styles.viewBtn}>
                <Button text='Scanear' onPress={handleScarner}  />
            </View>

            <View style={styles.viewEnviar}>
                <Button text='Enviar' onPress={handleEnviar} />
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
    viewBtn: {
        position: 'absolute',
        top: 450
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    viewPresenca: {
        top: 550,
        position: 'absolute',
    },
    viewEnviar: {
        top: 700,
        position: 'absolute',
    },
})
