import React from 'react'
import { TextInput, StyleSheet, ImagePropTypes } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

interface InputT {
    style: {},
    [x:string]: unknown
}
export const Input: React.FC<InputT> = (props): JSX.Element => {
    return <TextInput {...props} style={{...styles.input, ...props.style}}/>
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: Colors.grey,
        borderBottomWidth: 1,
        marginVertical: 10
    }
})