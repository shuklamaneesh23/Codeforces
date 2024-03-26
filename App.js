import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/LoginScreen';
import { UserDetails } from './components/UserDetails';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Contests from './components/Contests';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProblemSet from './components/ProblemSet';



const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const TabNavigation = () => {
  return (
    
      <Tab.Navigator
     
      >
        <Tab.Screen name="UserDetails"  component={UserDetails} 
         options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'monospace',
            fontSize: 22,
          },
          headerTitleContainerStyle:{
           
            marginLeft: 120,
            
          
          },
          tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
        }}
        />
        <Tab.Screen name="Contests" component={Contests} 
         options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'monospace',
            fontSize: 22,
          },
          headerTitleAlign: 'center',
          headerTitleContainerStyle: styles.container,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy" size={size} color={color} />
          ),
        }}
        />
      </Tab.Navigator>  
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'monospace',
          fontSize: 22,
        },
        headerTitleAlign: 'center',
        headerTitleContainerStyle: styles.container,
      }}
      >
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Home" component={TabNavigation} options={{ headerShown: false }} />
        <stack.Screen name="ProblemSet" component={ProblemSet} />

      </stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
