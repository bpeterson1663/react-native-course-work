import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'

interface MainButtonT {
    onPressHandler: () => void
}
export const MainButton: React.FC<MainButtonT> = ({children, onPressHandler}) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPressHandler}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18
    }
})