import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Colors from '../constants/colors'
export const Header: React.FC<{ title: string }> = ({ title }): JSX.Element => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
        borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    }
})

Header.propTypes = {
    title: PropTypes.string.isRequired
}