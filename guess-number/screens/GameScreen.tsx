import React, {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
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

const renderListItem = (guess: number, numOfRound: number) => (
    <View style={styles.listItem} key={guess}>
        <Text>#{numOfRound}</Text>
        <Text>{guess}</Text>
    </View>
)

export const GameScreen: React.FC<GameScreenT> = ({userChoice, onGameOver}): JSX.Element => {
    const initialGuess = generateRandomBetween(1, 100, userChoice)
    const [ currentGuess, setCurrentGuess] = useState(initialGuess)
    const [pastGuesses, setPastGuesses] = useState([initialGuess])
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    
    useEffect(() => {
        if (currentGuess === userChoice){
            onGameOver(pastGuesses.length)
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
            currentLow.current = currentGuess +1
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        // setRounds(curRounds => ++curRounds)
        setPastGuesses(curPastGuess => [nextNumber, ...curPastGuess])

    }
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <MainButton onPressHandler={() => nextGuessHandler('lower')}>
                    <Ionicons name="md-remove" color="white" size={24} />
                </MainButton>
                <MainButton onPressHandler={() => nextGuessHandler('greater')}>
                    <Ionicons name="md-add" color="white" size={24} />
                </MainButton>
            </Card>
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map( (guess, i) => renderListItem(guess, pastGuesses.length - i))}
                </ScrollView>
            </View>
            
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
    },
    list: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listContainer: {
        width: '80%',
        flex: 1
    },
    listItem: {
        borderColor: '#ccc',
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    }
})