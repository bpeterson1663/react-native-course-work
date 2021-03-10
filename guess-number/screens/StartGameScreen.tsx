import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { Card } from '../components/Card'
import { Input } from '../components/Input'
import { NumberContainer } from '../components/NumberContainer'
import Colors from '../constants/colors'
interface StartGameScreenT {
    startGame: () => void
}
export const StartGameScreen: React.FC<StartGameScreenT> = ({ startGame }): JSX.Element => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmedState] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState(0)
    const numberInputHandler = (inputText: string): void => {
        if(inputText){
            setEnteredValue(inputText.replace(/[^0-9]/g, ''))
        }
        
    }
    
    const resetInputHandler = (): void => {
        setEnteredValue('')
        setConfirmedState(true)
        Keyboard.dismiss()
    }

    const confirmInputHandler = (): void => {
        const chosenNumber = parseInt(enteredValue)
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid number', 'Number has to be a number between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return
        }
        setConfirmedState(true)
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue('')
        Keyboard.dismiss()
    }

    let confirmedOutput: JSX.Element | null = null
    if(confirmed){
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button onPress={() => {}} title="START GAME"></Button>
            </Card>
        )
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} onChangeText={numberInputHandler} value={enteredValue} blurOnSubmit autoCapitalize='none' autoCorrect={false} maxLength={2} keyboardType='number-pad' />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button onPress={resetInputHandler} title="Reset" color={Colors.secondary}></Button></View>
                    <View style={styles.button}><Button onPress={confirmInputHandler} title="Confirm" color={Colors.primary}></Button></View>
                </View>
            </Card>
            {confirmedOutput}
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
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
})