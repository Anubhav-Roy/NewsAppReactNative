import React from 'react';
import { FlatList } from 'react-native';

// Import getNews from news.js 
import MainScreen from './src/screens/MainScreen'
import InAppBrowser from './src/screens/InAppBrowser'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

export default class App extends React.Component {
  
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="InAppBrowser" component={InAppBrowser} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

}
