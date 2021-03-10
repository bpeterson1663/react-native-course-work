import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

interface StartGameScreenT {
    startGame: () => void
}
export const StartGameScreen: React.FC<StartGameScreenT> = ({ startGame }): JSX.Element => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game!</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button onPress={startGame} title="Reset"></Button>
                    <Button onPress={startGame} title="Confirm"></Button>
                </View>
            </View>
            
        </View>
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
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
})