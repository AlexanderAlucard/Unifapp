import React, { Component } from 'react';
import { Text, StyleSheet, View } from "react-native";
import { WebView } from 'react-native-webview';
import html_script from '../mapa_html';
import Hhtml_script from '../leafletMap';

export function Mapa() {
  //return(
  //<View style={styles.container}>
  //  <Text>Mapa</Text>
  //</View>
 // );

 return(
  
    <WebView source={{html: Hhtml_script}} style={style.Webview}/>
 );
}

//  return (
//    <WebView source={{ html: html_script }} style={style.Webview} />
//  );
//}



const style = StyleSheet.create({
  Container: {
    flex:1,
    padding: 10,
    backgroundColor: 'grey'
  
  },
  Webview: {
    flex: 2,
    
  },
  ButtonArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  Button: {
    width: 80,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center'
  },
  ButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  }
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});