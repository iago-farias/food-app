import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons, Feather} from '@expo/vector-icons'

import HomeStack from './Screens/HomeStack';

const Tab = createBottomTabNavigator();

function Routes(){
 
  return(
    <NavigationContainer >
      <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch(route.name){
              case 'Home': 
                return <MaterialIcons name="dashboard" size={size} color={color} />
              case 'Favorites': 
                return <Feather name="heart" size={size} color={color} />
              case 'Account': 
                return <Feather name="user" size={size} color={color} />
              case 'More': 
                return <Feather name="more-horizontal" size={size} color={color} />
            }
          },
        })}
        tabBarOptions={{
          activeTintColor:'#AF3617',
          inactiveTintColor:'#BEB6A5',
        }}
        >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Favorites" component={HomeStack} />
        <Tab.Screen name="Account" component={HomeStack} />
        <Tab.Screen name="More" component={HomeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;