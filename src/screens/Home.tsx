import React, { Component, useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Button} from "react-native";

import { MainNavigationProp } from '../routing/Types'
import { MainRoutes } from '../routing/Routes'

import MoviesContainer from "../components/movies/MoviesContainer";


function Home ({navigation}: {navigation: any}) {

   const onMovieChange= (movieid: any)=>{
    console.log(movieid); //este movieid lo tiene que recibir detalles
    navigation.navigate('Details')
   }

     return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
      <Text style={styles.text}>Movies</Text> 
      <Button title="Favorites" onPress={() => navigation.navigate('Favorites')}/>
      </View>
      <MoviesContainer
      onMoviePress={onMovieChange}
      />
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    padding: 10,
    textAlign: "center",
  },
});