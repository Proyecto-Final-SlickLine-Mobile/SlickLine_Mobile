import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { styles } from '../Styles/Styles'

export const ButtonNavigation = ({titulo, nav, icon}) =>{

    const navigation = useNavigation()

    const navigateTo = () =>{
        navigation.navigate(nav)
    }

    return(
        <TouchableOpacity style={styles.buttonInicio} onPress={navigateTo}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                
                <Text style={{ fontSize: 30 }}>   {icon}    {titulo}  </Text>
            </View>
        </TouchableOpacity>
    )
}
