import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

interface GameOverScreenT {
    numRounds: number,
    userNumber: number,
    restartGame: () => void
}
export const GameOverScreen: React.FC<GameOverScreenT> = ({numRounds, userNumber, restartGame}): JSX.Element => {
    return (
        <View style={styles.screen}>
            <Text>The Game is over</Text>
            <Text>Number of rounds: {numRounds}</Text>
            <Text>Number was: {userNumber}</Text>
            <Button onPress={restartGame} title="NEW GAME"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})