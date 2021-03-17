import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, SafeAreaView } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput'
export default function App() {
  const [allGoals, setAllGoals] = useState<{key: string, value: string}[]>([])
  const [isAddMode, setIsAddMode] = useState(false)

  const handleSubmit = (goal: string): void => {
    setAllGoals(currentGoals => [...currentGoals, {value: goal, key: Math.random().toString()}])
    setIsAddMode(false)
  } 
  
  const removeGoalHandler = (id: string): void => {
    setAllGoals(currentGoals => currentGoals.filter(goal => goal.key !== id))
  }
  return (
    <SafeAreaView style={styles.screen}>
      <GoalInput visible={isAddMode} handleSubmit={handleSubmit} handleCancel={() => setIsAddMode(false)}/>
      <Button title="Add new Goal" onPress={()=> setIsAddMode(true)} />
      
      <FlatList 
        data={allGoals} 
        renderItem={itemData => 
          <GoalItem title={itemData.item.value} id={itemData.item.key} onDelete={removeGoalHandler}/>
        } 
        />  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
});
