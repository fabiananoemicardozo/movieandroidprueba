//paso 3 - Importar Main Navigation para que fncione 
import React from 'react'
import { Provider } from 'react-native-redux'
import MainNavigation from './src/routing/MainNavigation'

export default function App(): React.ReactElement {
    return (

            <MainNavigation />

    )
}



/*import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";


//import MoviesContainer from "./screens/container/MoviesContainer";


import Navigator from "./navigations/Navigation";


export default class App extends Component {
  render() {
    return(
      <>
      
      <Navigator/>
      </>
    )   
  }
};*/