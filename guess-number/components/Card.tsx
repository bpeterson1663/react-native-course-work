import React from 'react'
import { View, StyleSheet } from 'react-native'

interface CardT {
    style: {}
}
export const Card: React.FC<CardT> = ({style, children}) => {
    return <View style={{...styles.card, ...style}}>{children}</View>
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        elevation: 5, //used for androids
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
})