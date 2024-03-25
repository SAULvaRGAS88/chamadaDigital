import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button } from '../componentes/Button'
import { useNavigation } from '@react-navigation/native'

export const DashScreen = () => {

    const navigation = useNavigation()

    const handleChamada = () =>{
        navigation.navigate('ScanerScreen')
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewTilteHeade}><Text style={styles.titleHeader}>Disciplina: Engenharia de Software 2</Text></View>
            <View style={styles.viewTilteLista}><Text style={styles.titleLista}>ALunos</Text></View>
            <View style={styles.viewScrollView}>
                <ScrollView>
                    <Text>teste</Text>
                </ScrollView>
            </View>
            <View style={styles.viewBtn}>
                <Button text='Realizar Cham.' onPress={handleChamada} />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    titleHeader: {
        fontSize: 26,
        color: 'black'
    },
    viewTilteHeade: {
        alignItems: 'center'
    },
    viewTilteLista: {
        alignItems: 'center'
    },
    titleLista: {
        fontSize: 18,
        color: 'black'
    },
    viewScrollView: {
        backgroundColor: '#fff',
        marginTop: 20,
        height: 400,
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
    viewBtn:{
        top: 200
    }
})
