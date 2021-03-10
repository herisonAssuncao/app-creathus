import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from "./pages/main";
import Contato from "./pages/contato";
import Login from "./pages/Login";
import FlashMessage, { showMessage } from "react-native-flash-message";

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{
          headerStyle: {
            backgroundColor: "#DA552F"
          },
          headerTintColor: "#FFF"
        }}/>
        <Stack.Screen name="Contatos" component={Main} options={{
          headerStyle: {
            backgroundColor: "#DA552F"
          },
          headerTintColor: "#FFF"
        }}/>
        <Stack.Screen name="Contato" component={Contato} options={{
          headerStyle: {
            backgroundColor: "#DA552F"
          },
          headerTintColor: "#FFF"
        }}/>
      </Stack.Navigator>
      <FlashMessage position="top" floating/>
    </NavigationContainer>
  );
};

export default App;
