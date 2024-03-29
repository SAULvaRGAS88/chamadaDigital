import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, Modal, Button, TextInput, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import ListaAlunos from '../serviços/ListaAlunos';

export const ScanerScreen = () => {

    const [modalPresenca, setModalPresenca] = useState(false);
    const [modalJustificar, setModalJustificar] = useState(false);
    const [nomeAlunoLista, setNomealunoLista] = useState("")
    const [sugestoes, setSugestoes] = useState([]);
    const [nomeAlunoInput, setNomeAlunoInput] = useState("")

    const navigation = useNavigation()

    const handleScarner = () => {
        console.log('foto capturada')
    };

    const handlePresenca = () => {
        setModalPresenca(true);
        console.log('abriu MOdal')
    };

    const handleJustificar = () => {
        setModalJustificar(true)
        console.log('Falta  Justificado')
    };

    const handleEnviar = () => {
        console.log('Presença enviada')
    };

    const handleVoltar = () => {
        navigation.goBack()
        console.log('Voltou')
    }

    const verificarAlunoNome = (nome) => {
        const procurarAluno = ListaAlunos.find((item) => item.nome === nome);
        if (procurarAluno) {
            console.log(procurarAluno);
        } else {
            console.log('Aluno não encontrado!');
        }
    }

    const filtrarSugestoes = (texto) => {
        const sugestoesFiltradas = ListaAlunos.filter(aluno =>
            aluno.nome.toLowerCase().includes(texto.toLowerCase())
        );
        setSugestoes(sugestoesFiltradas);
    };

    const selecionarAluno = (nome) => {
        setNomeAlunoInput(nome);
        setSugestoes([]);
    };

    return (
        <View style={styles.container}>

            <View style={styles.btnVoltar}>
                <Button
                    onPress={handleVoltar}
                    title='Voltar'
                    color={'#ffbf00'}
                />
            </View>

            {nomeAlunoInput !== '' && (
                <View style={styles.viewNomeSelecionado}>
                    <Text>
                        Nome do aluno
                    </Text>
                    <Text>
                        {nomeAlunoInput} <Icon name="th-list" style={styles.icon} />
                    </Text>
                </View>
            )}


            <View style={styles.buttonsContainer}>

                <View style={styles.btnStyle}>
                    <Button
                        onPress={handleScarner}
                        title='Escanear QR Code'
                        color={'#ffbf00'}
                    />

                </View>

                <View style={styles.btnStyle}>
                    <Button
                        onPress={handlePresenca}
                        title='Marcar Presença'
                        color={'#ffbf00'}
                    />
                </View>

                <View style={styles.btnStyle}>
                    <Button
                        onPress={handleJustificar}
                        title='Justificar Falta'
                        color={'#ffbf00'}
                    />
                </View>

                <View style={styles.btnStyle}>
                    <Button
                        onPress={() => {
                            handleVoltar()
                            handleEnviar()
                        }}
                        title='Enviar'
                        color={'#ffbf00'}
                    />
                </View>
            </View>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalPresenca}
                onRequestClose={() => setModalPresenca(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>Buscar aluno por nome</Text>
                        <TextInput
                            style={styles.inputModal}
                            placeholder='Nome do aluno'
                            value={nomeAlunoInput}
                            onChangeText={texto => {
                                setNomeAlunoInput(texto);
                                filtrarSugestoes(texto);
                            }}
                        />
                        <View style={{ marginBottom: 10 }}>
                            <Button
                                title='Ok'
                                color={'#ffbf00'}
                                onPress={() => {
                                    verificarAlunoNome(nomeAlunoInput);
                                    setModalPresenca(false)
                                }}
                            />
                        </View>


                        <Button
                            title='Fechar'
                            color={'#ffbf00'}
                            onPress={() => {
                                console.log('fechou MOdal')
                                setModalPresenca(false)
                            }}
                        />
                        <FlatList
                            data={sugestoes}
                            renderItem={({ item }) => (
                                <Text onPress={() => selecionarAluno(item.nome)}>{item.nome}</Text>
                            )}
                            keyExtractor={(item) => item.nome}
                        />
                    </View>

                </View>
            </Modal>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalJustificar}
                onRequestClose={() => setModalJustificar(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>Conteúdo do Modal Justificar</Text>
                        <Button
                            title='Fechar'
                            color={'#ffbf00'}
                            onPress={() => {
                                console.log('fechou MOdal')
                                setModalJustificar(false)
                            }}
                        />
                    </View>
                </View>
            </Modal>
        </View >
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
        width: 300,
    },
    btnVoltar: {
        top: 10,
        right: 10,
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '100%'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    inputModal: {
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    viewNomeSelecionado: {
        top: 250,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    }
})
