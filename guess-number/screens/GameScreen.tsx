import React, {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { NumberContainer } from '../components/NumberContainer'
import { Card } from '../components/Card'
import { MainButton } from '../components/MainButton'
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
    userChoice: number,
    onGameOver: (num: number) => void
}
export const GameScreen: React.FC<GameScreenT> = ({userChoice, onGameOver}): JSX.Element => {
    const [ currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice))
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    
    useEffect(() => {
        if (currentGuess === userChoice){
            onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver])
    
    const nextGuessHandler = (direction: 'lower' | 'greater') => {
        if( (direction === 'lower' && currentGuess < userChoice) || 
            (direction === 'greater' && currentGuess > userChoice)) {
            Alert.alert('Don\'t lie', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}])
            return
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(curRounds => ++curRounds)

    }
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <MainButton onPressHandler={() => nextGuessHandler('lower')}>LOWER</MainButton>
                <MainButton onPressHandler={() => nextGuessHandler('greater')}>GREATER</MainButton>
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
        width: 400,
        maxWidth: '90%'
    }
})