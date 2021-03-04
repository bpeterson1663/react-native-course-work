import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

interface GoalInputT {
    handleSubmit: (goal: string) => void,
    handleCancel: () => void,
    visible: boolean
} 

export const GoalInput: React.FC<GoalInputT> = ({handleSubmit, visible, handleCancel}): JSX.Element => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const handleInput = (enteredText: string): void => setEnteredGoal(enteredText)
    const goalSubmitted = () => {
        handleSubmit(enteredGoal)
        setEnteredGoal('')
    }
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.container}>
                <TextInput placeholder="Enter Goals" style={styles.input} value={enteredGoal} onChangeText={handleInput}/>
                <View style={styles.buttonContainer}>
                    <Button onPress={goalSubmitted} title="ADD" />
                    <Button onPress={handleCancel} title="Cancel" color="red" />
                </View>
                
            </View>
        </Modal> 
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        margin: 20,
        alignItems: 'center',
    },    
    input: {
        width: 200,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
        
})

GoalInput.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    handleCancel: PropTypes.func.isRequired
}