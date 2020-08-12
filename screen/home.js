import React,{useState,useEffect} from 'react';
import { Appbar, TextInput,Button ,Card, Title} from 'react-native-paper';
import { View,Text,FlatList,Image } from 'react-native';
import Header from './header'
import AsyncStorage from '@react-native-community/async-storage';


const Home=(props)=>{
    const [info,setinfo]=useState({
        name:"loading",
        temperature:"loading",
        humidity:"loading",
        desc:"loading",
        icon:"loading"
    })

    useEffect(()=>{
        getWeather()
    },[])
    const getWeather= async ()=>{

        let myCity = await AsyncStorage.getItem("NewCity")
        // if mycity is not then it will set default mira road
        
        if(!myCity){
            const {city}=props.route.params
            myCity=city
        }
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&APPID=0d1481cae8da6a10295c6965f59fed25&units=metric`)
        .then(data=>data.json())
        .then(result=>
            setinfo({
                name:result.name,
                temperature:result.main.temp,
                humidity:result.main.humidity,
                desc:result.weather[0].description,
                icon:result.weather[0].icon
                
            })
            )

    }

    if(props.route.params !="Mira Road, India")
    {
        getWeather()
    }
    return(
        <View style={{flex:1}}>
           <Header name="weather app"/>
            <View style={{alignItems:"center"}}>
                <Title style={{
                    color:"#00aaff",
                    marginTop:30,
                    fontSize:30
                }}>
                    {info.name}
                </Title>

                <Image style={{
                    width:120,
                    height:120,
                    
                    //flexDirection:"row"
                }}
                source={{uri:"https://openweathermap.org/img/w/"+info.icon+".png"}}
                >
                    
                </Image>
            </View>

            <Card style={{
                margin:5,
                padding:12
                }}>
                <Title style={{color:"#00aaff"}}>
                    Temperature - {info.temperature}
                </Title>
            </Card>
            <Card style={{
                margin:5,
                padding:12
                }}>
                <Title style={{color:"#00aaff"}}>
                   Humidity - {info.humidity}
                </Title>
            </Card>
            <Card style={{
                margin:5,
                padding:12
                }}>
                <Title style={{color:"#00aaff"}}>
                    Description - {info.desc}
                </Title>
            </Card>
        </View>
    )
}

export default Home