import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons, Feather} from '@expo/vector-icons';
import {COLORS} from '../../constants';

import Home from '../Home';

const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator  screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

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
        activeTintColor:COLORS.primary,
        inactiveTintColor:COLORS.lightGray1,
      }}
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Home} />
      <Tab.Screen name="Account" component={Home} />
      <Tab.Screen name="More" component={Home} />
    </Tab.Navigator>
 
  );
}

export default Tabs;