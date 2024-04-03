import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View, Modal, Button, TextInput, FlatList, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ListaAlunos from '../../serviços/ListaAlunos';
import MotivosJustificacao from '../../serviços/MotivosJustificacao';
import { handleScarner } from './FuncoesScanerScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';

export const ScanerScreen = () => {

    const [modalPresenca, setModalPresenca] = useState(false);
    const [modalJustificar, setModalJustificar] = useState(false);
    const [sugestoes, setSugestoes] = useState([]);
    const [nomeAlunoInput, setNomeAlunoInput] = useState("")
    const [motivoInput, setMotivoInput] = useState('')

    const navigation = useNavigation()

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

    const filtrarSugestoes = (texto) => {
        if (texto.length >= 3) {
            const sugestoesFiltradas = ListaAlunos.filter(aluno =>
                aluno.nome.toLowerCase().includes(texto.toLowerCase())
            );
            setSugestoes(sugestoesFiltradas);
        } else {
            setSugestoes([]);
        }
    };

    const selecionarAluno = (nome) => {
        setNomeAlunoInput(nome);
        setSugestoes([]);
    };

    const limpaNome = () => {
        setNomeAlunoInput("");
    }

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const items = MotivosJustificacao.map(item => ({
        label: item.motivo,
        value: item.motivo,
    }));

    return (
        <View style={styles.container}>

            <View style={styles.btnVoltar}>
                <Button
                    onPress={handleVoltar}
                    title='Voltar'
                    color={'#ffbf00'}
                />
            </View>

            {nomeAlunoInput !== '' && ListaAlunos.some(item => item.nome === nomeAlunoInput) && (
                <View style={styles.viewNomeSelecionado}>
                    <Text style={styles.textNomeSelecionado}>Nome do aluno(a)</Text>
                    <Text style={styles.textNomeSelecionado}>{nomeAlunoInput} </Text>

                    {motivoInput !== '' ? (
                        <View style={styles.viewIconJustifica}>
                            <View style={styles.iconJustifica}>
                                <Icon name="info" style={styles.icon} color={'orange'} size={16} />
                            </View>

                            <Text style={styles.textNomeSelecionado}>Motivo: {motivoInput}</Text>
                        </View>
                    ) : (
                        <View style={styles.iconJustifica}>
                            <Icon name="check" style={styles.icon} color={'green'} size={16} />
                        </View>
                    )}

                </View>
            )}



            {/* BOTÕES */}
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
                        title='Marcar Presença por Nome'
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

            {/* MODAL PRESENÇA POR NOME */}
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
                            value={nomeAlunoInput}
                            ref={inputRef}
                            autoFocus={true}
                            textAlign='center'
                            keyboardType="ascii-capable"
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
                                    if (nomeAlunoInput === '') {
                                        Alert.alert('Atenção', 'Insira um Nome!');
                                    } else if (!ListaAlunos.some(item => item.nome === nomeAlunoInput)) {
                                        Alert.alert("Atenção", "Nome Digitado não encontrado na Lista de Alunos");
                                    } else {
                                        selecionarAluno(nomeAlunoInput)
                                        setModalPresenca(false);
                                    }
                                }}
                            />
                        </View>

                        <View style={{ marginBottom: 10 }}>
                            <Button
                                title='Limpar'
                                color={'#ffbf00'}
                                onPress={() => {
                                    limpaNome()
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
                        <View style={{ alignItems: 'center' }}>
                            <FlatList
                                data={sugestoes}
                                renderItem={({ item }) => (
                                    <Text
                                        style={{ fontSize: 18, paddingTop: 10, color: 'black', textDecorationLine: 'underline', }}
                                        onPress={() => selecionarAluno(item.nome)}>{item.nome}
                                    </Text>
                                )}
                                keyExtractor={(item) => item.nome}
                                textAlign='center'
                            />
                        </View>
                    </View>

                </View>
            </Modal>

            {/* FALTA JUSTIFICADA */}
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalJustificar}
                onRequestClose={() => setModalJustificar(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>Justificar Falta</Text>
                        <TextInput
                            style={styles.inputModal}
                            ref={inputRef}
                            autoFocus={true}
                            textAlign='center'
                            keyboardType="ascii-capable"
                            placeholder='Selecione um Aluno'
                            onChangeText={texto => {
                                setNomeAlunoInput(texto);
                                filtrarSugestoes(texto);
                            }}
                        />

                        <RNPickerSelect
                            onValueChange={(label) => setMotivoInput(label)}
                            items={items}
                            placeholder={{ label: 'Escolha uma opção...', value: null }}

                        />

                        <View style={{ marginBottom: 10 }}>
                            <Button
                                title='Ok'
                                color={'#ffbf00'}
                                onPress={() => {
                                    if (nomeAlunoInput === '') {
                                        Alert.alert('Atenção', 'Insira um Nome!');
                                    } else if (!ListaAlunos.some(item => item.nome === nomeAlunoInput)) {
                                        Alert.alert("Atenção", "Nome Digitado não encontrado na Lista de Alunos");
                                    } else if (motivoInput === '') {
                                        Alert.alert("Atenção", "Selecione uma Justificativa");
                                    } else {
                                        selecionarAluno(nomeAlunoInput)
                                        setModalJustificar(false);
                                    }
                                }}
                            />
                        </View>

                        <View style={{ marginBottom: 10 }}>
                            <Button
                                title='Limpar'
                                color={'#ffbf00'}
                                onPress={() => {
                                    limpaNome()
                                }}
                            />
                        </View>

                        <Button
                            title='Fechar'
                            color={'#ffbf00'}
                            onPress={() => {
                                console.log('fechou MOdal')
                                setModalJustificar(false)
                            }}
                        />

                        <FlatList
                            data={sugestoes}
                            renderItem={({ item }) => (
                                <Text
                                    style={{ fontSize: 18, paddingTop: 10, color: 'black', textDecorationLine: 'underline', }}
                                    onPress={() => selecionarAluno(item.nome)}>{item.nome}
                                </Text>
                            )}
                            keyExtractor={(item) => item.nome}
                            textAlign='center'
                        />
                    </View>
                </View>
            </Modal>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
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
        width: '85%'
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
        width: '100%',
    },
    viewNomeSelecionado: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 250,
        backgroundColor: '#FFBF00',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: '90%',
        flexDirection: 'column'
    },
    textNomeSelecionado: {
        color: 'black',
        fontSize: 16,
        marginRight: 5,
        fontWeight: 'bold',
        fontFamily: 'Arial'
    },
    viewIconJustifica: {
        alignItems: 'center'
    },
    iconJustifica: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 20
    }

})
