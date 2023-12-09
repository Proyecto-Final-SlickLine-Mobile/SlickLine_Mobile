import React from "react"
import { View, Text, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"

export const ButtonNavigation = ({titulo, nav}) =>{

    const navigation = useNavigation()

    const navigateTo = () =>{
        navigation.navigate(nav)
    }

    return(
        <Button title={titulo} 
            onPress={navigateTo}
        />
    )
}