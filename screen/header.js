import * as React from 'react';
import { Appbar,Title } from 'react-native-paper';

export default Header=(props)=> {
    return (
      <Appbar.Header
      theme={{
          colors:{
              primary:"#00aaff"
          }
      }}
      style={{justifyContent:"center",flexDirection:"row"}}
      >
       <Title style={{color:"white"}}>
           {props.name}
        </Title> 
      </Appbar.Header>
    );
}