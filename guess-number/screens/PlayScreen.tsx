import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'

export const InPlayScreen: React.FC = (): JSX.Element => {
    return (
        <View style={styles.screen}>
            <Text>Guess A Number</Text>
        </View>
    )
}

InPlayScreen.propTypes = {
    startGame: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
})