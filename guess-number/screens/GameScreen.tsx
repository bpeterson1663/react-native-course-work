import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Button } from 'react-native'
import { NumberContainer } from '../components/NumberContainer'
import { Card } from '../components/Card'

const generateRandomBetween = (min: number, max: number, exclude: number): number => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const random = Math.floor(Math.random() * (max - min) + min)
    if(random === exclude) {
        return generateRandomBetween(min, max, exclude)
    }else {
        return random
    }
}
interface GameScreenT {
    userChoice: number
}
export const GameScreen: React.FC<GameScreenT> = ({userChoice}): JSX.Element => {
    const [ currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice))
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Button onPress={() => {}} title="LOWER"></Button>
                <Button onPress={() => {}}  title="GREATER"></Button>
            </Card>
        </View>
    )
}

GameScreen.propTypes = {
    userChoice: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        maxWidth: '80%'
    }
})