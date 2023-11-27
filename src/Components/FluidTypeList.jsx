import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, Title } from 'react-native-paper';

const FluidTypeList = ({ fluidTypes }) => {
  return (
    <ScrollView>
      <Text>Tipos de Fluido por Parada:</Text>
      {fluidTypes.map((fluidType, index) => (
        <Card key={index} style={{ borderColor: 'black', borderWidth: 2 }}>
          <Card.Content>
            <Title>{`PARADA N° ${index + 1}: ${fluidType}`}</Title>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

export default FluidTypeList;