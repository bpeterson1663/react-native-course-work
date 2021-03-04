import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput'
export default function App() {
  const [allGoals, setAllGoals] = useState<{key: string, value: string}[]>([])


  const handleSubmit = (goal: string): void => setAllGoals(currentGoals => [...currentGoals, {value: goal, key: Math.random().toString()}]) 
  
  const removeGoalHandler = (id: string): void => {
    setAllGoals(currentGoals => currentGoals.filter(goal => goal.key !== id))
  }
  return (
    <View style={styles.screen}>
      <GoalInput handleSubmit={handleSubmit} />
      <FlatList 
        data={allGoals} 
        renderItem={itemData => 
          <GoalItem title={itemData.item.value} id={itemData.item.key} onDelete={removeGoalHandler}/>
        } 
        />  
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },

  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc',
    borderCOlor: 'black',
    borderWidth: 1
  }
});
