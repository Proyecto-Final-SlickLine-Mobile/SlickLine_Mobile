
import React from "react";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import AdminView from "../Pages/views/AdminView";
import ChartsPage from "../Pages/ChartsPage";
import OperadorView from "../Pages/views/OperatorView";
import Question from "../Pages/Question";
import OperationTable from "../Pages/OperationTable";
import JobsList from "../Pages/JobsList";
import { SuperAdminView } from "../Pages/views/SuperAdminView";
import RegistroView from "../Pages/views/RegistroView";
import FileUploader from "../Pages/FileUploader";
import FormSendData from "../Components/FormSendData";
import LoginView from "../Pages/views/LoginView";
import Wells from "../Pages/Wells";
import ListaUsuarios from "../Pages/ListaUsuarios";

export const AppNavigator =()=>{
    const Stack = createNativeStackNavigator()

    const {user} = useAuth();
  
    let ScreenComponent;
  
    if (user) {
      switch(user.role){
        case "admin":
          ScreenComponent = (
            <Stack.Navigator>
              <Stack.Screen name="Admin" component={AdminView} />
              <Stack.Screen name="ChartsPage" component={ChartsPage} />
              <Stack.Screen name="Table" component={OperationTable} />
              <Stack.Screen name="Pregunta" component={Question} />
              <Stack.Screen name="FileUploader" component={FileUploader} />
              <Stack.Screen name="Carga de Datos" component={FormSendData} />
              <Stack.Screen name="JobsList" component={JobsList} />
              <Stack.Screen name="Wells" component={Wells} />
            </Stack.Navigator>
          );
          break;
        case "operador":
          ScreenComponent = (
            <Stack.Navigator>
              <Stack.Screen name="operador" component={OperadorView} />
              <Stack.Screen name="Table" component={OperationTable} />
              <Stack.Screen name="Pregunta" component={Question} />
              <Stack.Screen name="JobsList" component={JobsList} />
              <Stack.Screen name="ChartsPage" component={ChartsPage} />
              <Stack.Screen name="Wells" component={Wells} />
              
            </Stack.Navigator>
          );
          break;
        case "super-admin": 
          ScreenComponent = (
            <Stack.Navigator>
              <Stack.Screen name="superAdmin" component={SuperAdminView} />
              <Stack.Screen name="Registro de usuarios" component={RegistroView}/>
              <Stack.Screen name="ChartsPage" component={ChartsPage} />
              <Stack.Screen name="Table" component={OperationTable} />
              <Stack.Screen name="Pregunta" component={Question} />
              <Stack.Screen name="FileUploader" component={FileUploader} />
              <Stack.Screen name="Carga de Datos" component={FormSendData} />
              <Stack.Screen name="JobsList" component={JobsList} />
              <Stack.Screen name="Wells" component={Wells} />
              <Stack.Screen name="listaUsuarios" component={ListaUsuarios} />
  
            </Stack.Navigator>
          );
          break;
        default:
          ScreenComponent = null;
      }
    } else {
      ScreenComponent = (
        <Stack.Navigator>
          <Stack.Screen name='Login' component={LoginView}/>
        </Stack.Navigator>
      );
    }

    return(
        <>
            <NavigationContainer>
                {ScreenComponent}
            </NavigationContainer>
            <StatusBar style="auto"/>
        </>
    )
  
}