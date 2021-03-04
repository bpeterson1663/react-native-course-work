import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

interface GoalInputT {
    handleSubmit: (goal: string) => void
} 

export const GoalInput: React.FC<GoalInputT> = ({handleSubmit}): JSX.Element => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const handleInput = (enteredText: string): void => setEnteredGoal(enteredText)
    const goalSubmitted = () => {
        handleSubmit(enteredGoal)
        setEnteredGoal('')
    }
    return (
        <View style={styles.container}>
            <TextInput placeholder="Enter Goals" style={styles.input} value={enteredGoal} onChangeText={handleInput}/>
            <Button onPress={goalSubmitted} title="ADD" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },    
    input: {
        width: 200,
        borderColor: 'black',
        borderWidth: 1
      }
})