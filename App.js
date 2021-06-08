import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, PatientScreen} from './screens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Пациенты',
            headerStyle: {
              backgroundColor: 'transparent',
              shadowColor: 'transparent',
            },
            headerTintColor: '#2a86ff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Patient" component={PatientScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
