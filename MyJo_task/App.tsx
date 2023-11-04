import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainScreen from './src/screens/MainScreen';
import TaskScreen from './src/screens/TaskScreen';

const Tab = createBottomTabNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="Tasks" component={TaskScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
