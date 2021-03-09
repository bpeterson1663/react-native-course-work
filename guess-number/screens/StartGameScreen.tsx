import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Button } from 'react-native'

interface StartGameScreenT {
    startGame: () => void
}
export const StartGameScreen: React.FC<StartGameScreenT> = ({ startGame }): JSX.Element => {
    return (
        <View style={styles.screen}>
            <Text>Game Screen</Text>
            <Button onPress={startGame} title="Start Game"></Button>
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
    }
})