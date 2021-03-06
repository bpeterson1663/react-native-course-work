import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header'
import { StartGameScreen } from './screens/StartGameScreen';
export default function App() {
  const [gameActive, setGameActive] = useState(false)
  return (
    <View style={styles.container}>
      <Header title="Guess A Number" />
      <StartGameScreen startGame={() => setGameActive(true)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
