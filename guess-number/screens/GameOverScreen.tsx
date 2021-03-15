import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { MainButton } from '../components/MainButton'
interface GameOverScreenT {
    numRounds: number,
    userNumber: number,
    restartGame: () => void
}
export const GameOverScreen: React.FC<GameOverScreenT> = ({numRounds, userNumber, restartGame}): JSX.Element => {
    return (
        <View style={styles.screen}>
            <Text>The Game is over</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image}  source={require('../assets/success.png')}/>
            </View>
            <Text>Number of rounds: {numRounds}</Text>
            <Text>Number was: {userNumber}</Text>
            <MainButton onPressHandler={restartGame}>NEW GAME</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    }, 
    image: {
        width: '100%',
        height: '100%',
    }
})