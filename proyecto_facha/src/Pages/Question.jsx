import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PickerModal from 'react-native-picker-modal-view';
import ButtonTouchable from './../Components/ButtonTouchable';
import { styleList, styles } from '../Styles/Styles';

function Question({navigation}) {
    const [selectedValue, setSelectedValue] = useState(null);

    const formRedirection = (res) => {
        navigation.navigate('Carga de Datos', {data: res, option: selectedValue});
    }

    const fileUploaderRedirection = () => {
        navigation.navigate('FileUploader');
    }

    const items = Array.from({length: 15}, (_, i) => ({Name: `PL - ${i + 1}`, Value: `PL - ${i + 1}`, Id: i}));

    return (
        <View style={miniStyle.container}>
            <Text style={{fontSize: 30, textAlign: 'center'}}>¿Tiene acceso a los valores de densidad?</Text>
            <PickerModal
                onSelected={(selected) => setSelectedValue(selected.Name)}
                onBackRequest={() => console.log('back key pressed')}
                items={items}
                sortingLanguage={'tr'}
                showToTopButton={true}
                selected={selectedValue}
                showAlphabeticalIndex={true}
                autoGenerateAlphabeticalIndex={true}
                selectPlaceholderText={'Seleccionar'}
                onEndReached={() => console.log('list ended...')}
                searchPlaceholderText={'Buscar...'}
                requireSelection={false}
                autoSort={false}
            />
            <View style={miniStyle.container}>
                <View>
                    <ButtonTouchable
                        styleButton={styleList.listEntry}
                        styleText={styles.buttonText}
                        text={"Sí"}
                        pressFunction={() => formRedirection("Sí")}
                    />
                    <ButtonTouchable
                        styleButton={styleList.listEntry}
                        styleText={styles.buttonText}
                        text={"No"}
                        pressFunction={() => formRedirection("No")}
                    />
                    <View style={{width: '15%'}}></View>
                    <ButtonTouchable
                        styleButton={styleList.listEntry}
                        styleText={styles.buttonText}
                        text={"Cargar archivo en su lugar"}
                        pressFunction={() => fileUploaderRedirection()}
                    />
                </View>
            </View>
        </View>
    )
}

export default Question

const miniStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
})
