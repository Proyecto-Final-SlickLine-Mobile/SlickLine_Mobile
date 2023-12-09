import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, Title } from 'react-native-paper';
import * as data from '../../assets/data';
import Icon from 'react-native-vector-icons/FontAwesome';

const getFluidIconAndColor = (fluidType) => {
  switch (fluidType) {
    case 'Agua Salada':
      return { icon: 'tint', color: 'blue' };
    case 'Mezcla de agua y petroleo':
      return { icon: 'tint', color: 'brown' };
    case 'Petróleo':
      return { icon: 'tint', color: 'black' };
    case 'Mezcla de Petróleo y Gas':
      return { icon: 'tint', color: 'gray' };
    case 'Gas':
      return { icon: 'tint', color: 'yellow' };
    default:
      return { icon: 'tint', color: 'red' };
  }
};

const FluidTypeList = ({ fluidTypes }) => {
  const dataFluid = data.data.map((item, index) => ({
    press: item.Pressure,
    temp: item.Temperature,
    depth: item.Depth
  }));

  return (
    <ScrollView>
      <Text>Tipos de Fluido por Parada:</Text>
      {fluidTypes.map((fluidType, index) => {
        const { icon, color } = getFluidIconAndColor(fluidType);
        return (
          <Card key={index} style={{ borderColor: 'black', borderWidth: 2 }}>
            <Card.Content>
              <Title>{`PARADA N° ${index + 1}: ${fluidType}`}  <Icon name={icon} color={color} size={30} /></Title>
              
              <Text>{`Profundidad: ${dataFluid[index].depth}`}</Text>
              <Text>{`Presión: ${dataFluid[index].press}`}</Text>
              <Text>{`Temperatura: ${dataFluid[index].temp}`}</Text>
            </Card.Content>
          </Card>
        );
      })}
    </ScrollView>
  );
};

export default FluidTypeList;