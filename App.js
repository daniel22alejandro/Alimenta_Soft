import React, { startTransition } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loading from './screens/Loading';
import Home from './screens/Home'; 
import Code from './screens/Code';
import Password from './screens/password';
import Start from './screens/Start';
import Perfil from './screens/Perfil';
import Menu from './screens/Menu';
import List from './screens/List';
import Confirmacion from './screens/Confirmacion';
import Finish from './screens/Finish';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Loading" component={Loading}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Code" component={Code} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="Perfil" component={Perfil}/>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="List" component={List}/>
        <Stack.Screen name="Confirmacion" component={Confirmacion}/>
        <Stack.Screen  name="Finish" component={Finish}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
