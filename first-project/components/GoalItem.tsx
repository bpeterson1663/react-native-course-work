import React from 'react';
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface ItemDataT {
    title: string,
    id: string,
    onDelete: (id: string) => void
}

export const GoalItem: React.FC<ItemDataT> = ({title, onDelete, id}): JSX.Element => {

    return (
        <TouchableOpacity onPress={() => onDelete(id)} activeOpacity={0.8} >
            <View style={styles.listItem}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 10,
        backgroundColor: '#ccc',
        borderCOlor: 'black',
        borderWidth: 1
      }
})

GoalItem.propTypes = {
    title: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

