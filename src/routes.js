import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './Screens/Tabs';
import FoodDescription from './Screens/FoodDescription';

const Stack = createStackNavigator();

function Routes(){
 
  return(
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="FoodDescription" component={FoodDescription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;