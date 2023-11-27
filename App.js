import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormSendData from './src/Components/FormSendData';
import ChartsPage from './src/Pages/ChartsPage';
import Question from './src/Pages/Question';
import JobsList from './src/Pages/JobsList';
import OperationTable from './src/Pages/OperationTable';
import Principal from './src/Pages/Principal';
import FileUploader from './src/Pages/FileUploader';
import HomeScreen from './src/Pages/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Pregunta" component={Question} />
        <Stack.Screen name="FileUploader" component={FileUploader} />
        <Stack.Screen name="Carga de Datos" component={FormSendData} />
        <Stack.Screen name="JobsList" component={JobsList} />
        <Stack.Screen name="Table" component={OperationTable} />
        <Stack.Screen name="ChartsPage" component={ChartsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}