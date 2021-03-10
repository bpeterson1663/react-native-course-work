import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Card } from '../components/Card'
import { Input } from '../components/Input'
import Colors from '../constants/colors'
interface StartGameScreenT {
    startGame: () => void
}
export const StartGameScreen: React.FC<StartGameScreenT> = ({ startGame }): JSX.Element => {
    const [enteredValue, setEnteredValue] = useState('')

    const numberInputHandler = (inputText: string) => setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} onChangeText={numberInputHandler} value={enteredValue} blurOnSubmit autoCapitalize='none' autoCorrect={false} maxLength={2} keyboardType='number-pad' />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button onPress={startGame} title="Reset" color={Colors.secondary}></Button></View>
                    <View style={styles.button}><Button onPress={startGame} title="Confirm" color={Colors.primary}></Button></View>
                </View>
            </Card>
            
        </View>
        </TouchableWithoutFeedback>
    )
}

StartGameScreen.propTypes = {
    startGame: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
})