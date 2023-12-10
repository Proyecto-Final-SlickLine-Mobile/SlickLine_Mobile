import React from 'react';
import { View } from 'react-native';
import { AppNavigator } from './src/navigation/AppNavigation';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {

  return (
   <View style={{flex: 1}}>
     <AuthProvider>
     <AppNavigator/>
    </AuthProvider>
   </View> 
  );
}
//well operarios
//fileup