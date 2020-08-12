/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native'
import Search from './screen/search'
import Home from './screen/home'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

const App=()=> {
  return (
    <>
    {/* <Home/> */}
    
     {/* <Search/> */}
    <StatusBar barStyle="dark-content" />
     <NavigationContainer>
      <Tab.Navigator
        ScreenOption={({route})=>({
          tabBarIcon:({color})=>{
            let iconName;
            if(route.name==="Home"){
              iconName='home-city-outline'
            }
            else if(route.name==="Search"){
              iconName='city'
            }
          return <MaterialCommunityIcons name={iconName} size={25} color={color}/>
          }
          
         })}

        tabBarOptions={{
          activeTintColor:"white",
          inactiveTintColor:"grey",
          activeBackgroundColor:"#00aaff",
          inactiveBackgroundColor:"#00aaff"

        }}
      >
      <Tab.Screen name="Home" component={Home}
      initialParams={{city:"Mira Road"}}
      />
        <Tab.Screen name="Search" component={Search}/>
      </Tab.Navigator>
      
    </NavigationContainer>  
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
