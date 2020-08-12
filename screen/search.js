import React,{useState} from 'react';
import { Appbar, TextInput,Button ,Card} from 'react-native-paper';
import { View,Text,FlatList } from 'react-native';
import Header from './header'
import {NavigationContainer} from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';

export default Search=({navigation})=> {

    const [city,setcity]=useState('')
    const [cities,setcities]=useState([])

    const fetchCities =(text)=>{
      setcity(text)
      fetch("https://autocomplete.wunderground.com/aq?query="+text)
      .then(item=>item.json())  
      .then(cityData=>{
       setcities(cityData.RESULTS.slice(0,9))
        
      })

    }

    const btnClick= async ()=>{
      await AsyncStorage.setItem('NewCity', city)
      navigation.navigate("Home",{city:city})
    }

    const listClick= async (cityName)=>{
      setcities(cityName)
      await AsyncStorage.setItem('NewCity', cityName)
      navigation.navigate("Home",{city:cityName})  
    }
    return (
      <View style={{flex:1}}>
          <Header name="Search Screen"/>
          <TextInput

            label="city name"
            theme={{colors:{primary:"#00aaff"}}}
            value={city}
            onChangeText={(text)=>fetchCities(text)}
          />
          <Button 
          icon="content-save" 
          theme={{colors:{primary:"#00aaff"}}}
          style={{margin:20}}
          mode="contained" 
          onPress={() => btnClick()}>
           <Text style={{color:"white"}}>Press me</Text> 
          </Button>

          <FlatList
          data={cities}
          renderItem={({item})=>{
            return(
              <Card
                style={{margin:2,padding:12}}
                onPress={()=> listClick(item.name)}
              >
                <Text>{item.name}</Text>
              </Card>
            )
          }}
          keyExtractor={item=>item.name}
          />
      </View>
    );
}