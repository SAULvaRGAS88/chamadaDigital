import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button } from '../../componentes/Button'
import { useNavigation } from '@react-navigation/native'
import ListaAlunos from '../../serviços/ListaAlunos'
import Icon from 'react-native-vector-icons/FontAwesome';

export const DashScreen = () => {

    const navigation = useNavigation()

    const handleChamada = () => {
        navigation.navigate('ScanerScreen')
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewTilteHeade}><Text style={styles.titleHeader}>Disciplina: Engenharia de Software 2</Text></View>
            <View style={styles.viewTilteLista}><Text style={styles.titleLista}>Alunos</Text></View>
            <View style={styles.viewScrollView}>
                <ScrollView>
                    {ListaAlunos.map((item, index) => (
                        <View key={index} style={styles.viewListaAluno} >
                            <View style={styles.viewItem}>
                                <Text style={styles.textListaAluno}>{item.nome} - {item.matricula} - {item.celular}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.viewLegenda}>
                <Text>Legenda</Text>
                <View style={styles.viewLegendasIcon}>
                    <Text>Presença: <Icon name="check" size={20} color="green" /></Text>
                    <Text>Justificativa: <Icon name="info" size={20} color="orange" /></Text>
                    <Text>Falta: <Icon name="times" size={20} color="red" /> </Text>
                </View>
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
    viewBtn: {
        top: 200
    },
    viewListaAluno: {
        flex: 1,
        alignItems: 'flex-start',
    },
    textListaAluno: {
        fontSize: 18
    },
    viewItem: {
        paddingHorizontal: 30,
        borderBottomColor: "#ddd",
        borderBottomWidth: 2,
        width: '100%'
    },
    viewLegendasIcon:{
        flexDirection:'row',
        justifyContent:"space-between",
        width: '60%',
        paddingTop: 10
    },
    viewLegenda:{
        alignItems: 'center',
        paddingTop: 10
    }

})
