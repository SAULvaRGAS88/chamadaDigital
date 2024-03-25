import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button } from '../componentes/Button'
import { useNavigation } from '@react-navigation/native'

export const DashScreen = () => {

    const navigation = useNavigation()

    const handleChamada = () => {
        navigation.navigate('ScanerScreen')
    }

    const alunos = [
        { nome: 'João da Silva', matricula: '001', celular: '(11) 9 8765-4321' },
        { nome: 'Maria Oliveira', matricula: '002', celular: '(11) 9 8765-4322' },
        { nome: 'Pedro Santos', matricula: '003', celular: '(11) 9 8765-4323' },
        { nome: 'Ana Costa', matricula: '004', celular: '(11) 9 8765-4324' },
        { nome: 'Lucas Pereira', matricula: '005', celular: '(11) 9 8765-4325' },
        { nome: 'Juliana Souza', matricula: '006', celular: '(11) 9 8765-4326' },
        { nome: 'Bruno Lima', matricula: '007', celular: '(11) 9 8765-4327' },
        { nome: 'Camila Fernandes', matricula: '008', celular: '(11) 9 8765-4328' },
        { nome: 'Guilherme Almeida', matricula: '009', celular: '(11) 9 8765-4329' },
        { nome: 'Larissa Gomes', matricula: '010', celular: '(11) 9 8765-4330' },
        { nome: 'Rafael Martins', matricula: '011', celular: '(11) 9 8765-4331' },
        { nome: 'Paula Oliveira', matricula: '012', celular: '(11) 9 8765-4332' },
        { nome: 'Thiago Silva', matricula: '013', celular: '(11) 9 8765-4333' },
        { nome: 'Marina Vieira', matricula: '014', celular: '(11) 9 8765-4334' },
        { nome: 'Carlos Rodrigues', matricula: '015', celular: '(11) 9 8765-4335' },
        { nome: 'Fernanda Costa', matricula: '016', celular: '(11) 9 8765-4336' },
        { nome: 'Diego Oliveira', matricula: '017', celular: '(11) 9 8765-4337' },
        { nome: 'Isabela Sousa', matricula: '018', celular: '(11) 9 8765-4338' },
        { nome: 'Matheus Lima', matricula: '019', celular: '(11) 9 8765-4339' },
        { nome: 'Vanessa Santos', matricula: '020', celular: '(11) 9 8765-4340' }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.viewTilteHeade}><Text style={styles.titleHeader}>Disciplina: Engenharia de Software 2</Text></View>
            <View style={styles.viewTilteLista}><Text style={styles.titleLista}>ALunos</Text></View>
            <View style={styles.viewScrollView}>
                <ScrollView>
                    {alunos.map((item, index) => (
                        <View key={index} style={styles.viewListaAluno} >
                            <View style={styles.viewItem}>
                                <Text style={styles.textListaAluno}>{item.nome} - {item.matricula} - {item.celular}</Text>
                            </View>
                        </View>
                    ))}
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
    
})
