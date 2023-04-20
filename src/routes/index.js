import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabs from '../screen/tabs'
import MessageDetails from '../screen/MessageDetails'

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='home' screenOptions={{headerShown : false}}>
        <Stack.Screen name="home" component={BottomTabs} />
        <Stack.Screen name="MessageDetails" component={MessageDetails} options={{headerShown : true}} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Routes