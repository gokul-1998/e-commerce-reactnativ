import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    function BottomTabs(){
      return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle:{color:"#008E97"},
            headerShown:false,
            tabBarIcon:({focused})=>
            focused?(
              <Entypo name="home" size={24} color="#008E97" />
            ):(
              <AntDesign name="home" size={24} color="black" />
            )

            }

          }
          
          />
          <Tab.Screen name="Profile" component={HomeScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarLabelStyle:{color:"#008E97"},
            headerShown:false,
            tabBarIcon:({focused})=>
            focused?(
              <MaterialIcons name="person" size={24} color="#008E97" />
            ):(
              <MaterialIcons name="person-outline" size={24} color="black" />
            )

            }

          }
          
          />
          <Tab.Screen name="Cart" component={HomeScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarLabelStyle:{color:"#008E97"},
            headerShown:false,
            tabBarIcon:({focused})=>
            focused?(
              <AntDesign name="shoppingcart" size={24} color="#008E97" />
            ):(
              <AntDesign name="shoppingcart" size={24} color="black" />
            )

            }

          }
          
          />
         
        
        
        
        </Tab.Navigator>

      )
    }


  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown:false}}/>
        <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})