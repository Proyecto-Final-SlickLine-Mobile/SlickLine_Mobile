import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { styleList, styles } from '../Styles/Styles';
import ButtonTouchable from './../Components/ButtonTouchable';
import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';

function JobsList({ route }) {
  const { operations } = route.params;
  const navigation = useNavigation();

  const scrollViewRef = useRef();

  const tableRedirection = (operation) => {
    navigation.navigate('Table', { operation });
  };

  const questionRedirection = () => {
    navigation.navigate('Pregunta');
  };

  return (
    <ScrollView style={styles.container} ref={scrollViewRef}>
      <View>
        {operations.map((operation) => (
          <ButtonTouchable
            key={operation.name}
            styleButton={styles.sendButton}
            styleText={styles.buttonText}
            text={`Operation: ${operation.name}`}
            pressFunction={() => tableRedirection(operation)}
          />
        ))}
      </View>
      {operations.length === 0 ? (
        <View>
          <Text style={{fontSize: 20, textAlign: 'center'}}>Aún no hay datos en este pozo</Text>
        </View>
      ) : null}
      <ButtonTouchable
            styleButton={styles.sendButton}
            styleText={styles.buttonText}
            text={'Cargar datos'}
            pressFunction={questionRedirection}
          />
    </ScrollView>
  );
}

export default JobsList;
