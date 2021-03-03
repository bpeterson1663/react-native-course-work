import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [allGoals, setAllGoals] = useState<{key: string, value: string}[]>([])

  const handleInput = (enteredText: string): void => setEnteredGoal(enteredText)

  const handleSubmit = (): void => {
    setAllGoals(currentGoals => [...currentGoals, {value: enteredGoal, key: Math.random().toString()}])
    setEnteredGoal('')
  }
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TextInput placeholder="Enter Goal" style={styles.input} value={enteredGoal} onChangeText={handleInput}/>
        <Button onPress={handleSubmit} title="ADD" />
      </View>
      <FlatList data={allGoals} renderItem={itemData => <View style={styles.listItem}><Text>{itemData.item.value}</Text></View> } />
        
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc',
    borderCOlor: 'black',
    borderWidth: 1
  }
});
