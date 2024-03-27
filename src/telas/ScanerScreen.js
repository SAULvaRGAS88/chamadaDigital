import React, { useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, NativeBaseProvider } from "native-base";

export const ScanerScreen = () => {

    const handleScarner = () => {
        console.log('foto capturada')
    };

    const handlePresenca = () => {
        console.log('Confirmar Presença')
    };

    const handleJustificar = () => {
        console.log('Falta  Justificado')
    };

    const handleEnviar = () => {
        console.log('Presença enviada')
    };

    return (
        <NativeBaseProvider>
            <View style={styles.container}>

                <View style={styles.buttonsContainer}>
                    <View style={styles.viewScanear}>
                        <Button
                            onPress={handleScarner}
                            style={styles.btnStyle}>
                            Scanear
                        </Button>

                    </View>

                    <View style={styles.viewPresenca}>
                        <Button
                            style={styles.btnStyle}
                            onPress={handlePresenca} >
                            Presença Aluno
                        </Button>
                    </View>

                    <View style={styles.viewJustificar}>
                        <Button
                            onPress={handleJustificar}
                            style={styles.btnStyle} >
                            Justificar
                        </Button>
                    </View>

                    <View style={styles.viewEnviar}>
                        <Button
                            style={styles.btnStyle}
                            onPress={handleEnviar} >
                            Enviar
                        </Button>
                    </View>
                </View>

            </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonsContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 500,
        padding: 15
    },
    viewScanear: {

    },
    viewPresenca: {

    },
    viewJustificar: {

    },
    viewEnviar: {

    },
    btnStyle: {
        width: 150,
        height: 50,
        backgroundColor: '#9B4F4F',
    }
})
