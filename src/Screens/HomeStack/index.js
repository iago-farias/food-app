import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Home';
import FoodDescription from '../FoodDescription';

const Stack = createStackNavigator();

function HomeStack(){
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FoodDescription" component={FoodDescription} />
    </Stack.Navigator>
 
  );
}

export default HomeStack;