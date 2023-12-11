import React from 'react';
import { styles, styleList } from './../Styles/Styles';
import { wells } from '../../assets/data';
import { ScrollView, View } from 'react-native';
import ButtonTouchable from './../Components/ButtonTouchable'; // Asegúrate de importar el componente ButtonTouchable
import { useRef } from 'react';

function Wells({ navigation }) {

  const scrollViewRef = useRef();

  const handleWellPress = (well) => {
    navigation.navigate('JobsList', { operations: well.operations });
  };

  return (
    <ScrollView style={styles.container} ref={scrollViewRef}>
      {wells.map((well) => (
        <ButtonTouchable
          key={well.idWell}
          text={well.name}
          styleButton={[styles.sendButton, {padding: 20}]}
          styleText={styles.buttonText}
          pressFunction={() => handleWellPress(well)}
        />
      ))}
    </ScrollView>
  );
}

export default Wells;
