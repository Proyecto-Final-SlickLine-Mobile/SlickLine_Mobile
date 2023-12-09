import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

function ButtonTouchable({text, styleButton, styleText, pressFunction}) {
  return (
    <TouchableOpacity style={styleButton} onPress={pressFunction}>
        <Text style={styleText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonTouchable