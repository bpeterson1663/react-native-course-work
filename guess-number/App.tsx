import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header'
import { StartGameScreen } from './screens/StartGameScreen';
import { GameScreen } from './screens/GameScreen'
import { GameOverScreen } from './screens/GameOverScreen'
export default function App() {
  const [userNumber, setUserNumber] = useState(0)
  const [guessRounds, setGuessRounds] = useState(0)
  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }
  const restartGame = () => {
    setGuessRounds(0)
    setUserNumber(0)
  }
  const gameOverHandler = (numOfRounds: number) => {
    setGuessRounds(numOfRounds)
  }
  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if ( userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if (guessRounds > 0){
    content = <GameOverScreen userNumber={userNumber} numRounds={guessRounds} restartGame={restartGame}/>
  }
  return (
    <View style={styles.container}>
      <Header title="Guess A Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
