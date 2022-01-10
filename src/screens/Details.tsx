
import React, { Component, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View, Text, StyleSheet, Pressable, Image, ImageBackground } from "react-native";
import { BlurView } from "@react-native-community/blur";

import { MainNavigationProp } from '../routing/Types'
import { MainRoutes } from '../routing/Routes'
import { ButtonWithIcon } from "../components/ButtonWithIcon";



import DetailsContainer from "../components/details/DetailsContainer";
import MoviesLayout from "../components/movies/MoviesLayout";
import Home from "./Home";
import { ScrollView } from "react-native-gesture-handler";


type FavoritesProps = {
    navigation: MainNavigationProp<MainRoutes.Favorites>
}


function Details({route, navigation, value}: any) {

  const onMovieChange= (movieid: any)=>{
    console.log(movieid); //este movieid lo tiene que recibir detalles
    navigation.navigate('Home')
   }




  let [Fav, setFav] = useState(false);
  const movieDetails = route.movieid

  const setData = async () => {
    try {
      const favoriteMovies = await AsyncStorage.getItem('FavoriteMovies');
      let movies = favoriteMovies ? JSON.parse(favoriteMovies): [];
      let foundMovie = movies.find((m: any) => m.id === movieDetails.id);

      if (foundMovie == undefined){
        movies.push(movieDetails);
        setFav(true);
      } else {
        movies = movies.filter((m: any) => m.id !== movieDetails.id)
        setFav(false);
      }

      await AsyncStorage.setItem('favoriteMovies', JSON.stringify(movies));
    } catch(error){
      console.log(error);
    }
  }

  const loadFavoriteMovies = async () => {
    try{
      const favoriteMovies = await AsyncStorage.getItem('FavoriteMovies');
      let movies = favoriteMovies ? JSON.parse(favoriteMovies): [];
      let foundMovie = movies.find((m: any) => m.id === movieDetails.id);

      if (foundMovie == undefined){
        movies.push(movieDetails);
        setFav(true);
      } else {
        movies = movies.filter((m: any) => m.id !== movieDetails.id)
        setFav(false);
      }

      await AsyncStorage.setItem('favoriteMovies', JSON.stringify(movies));
    } catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    loadFavoriteMovies();
  },[]);

  React.useLayoutEffect(()=>{
    navigation.setOption({
      headerBackground: () =>{
        <BlurView
          blurAmount={20}
        />
      },
      headerRight: () => {
        <View>
          <Pressable
            onPress={()=>{
              setData();
            }}>
            <Image source={
              Fav
              ? require('../image/heart.png')
              : require('../image/heartOutline.png')
            }/>
          </Pressable>

        </View>
      }
    });
  });

   
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>     
        <ButtonWithIcon icon={require('../image/Path.png')} onTap={() => navigation.navigate('Home')} width={42} height={42} />    
        <Text style={styles.text}>Movie Info</Text>
      </View>

      <ImageBackground
        source={{uri: 'https://image.tmdb.org/t/p/w500' + movieDetails.backdrop_path}}
        resizeMode="cover"
        style={styles.image}
      />

      <View>
        <Text>{movieDetails.title}</Text>
        <Text>{movieDetails.overview}</Text>
      </View>

    </ScrollView> 
  );
}
export default Details;

const styles =  StyleSheet.create({
  text: {
    fontSize: 24,
    padding: 10,
    textAlign: "center",
  },
  image:{
    width: 72,
    height: 72,
  }
})

/*
   <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details</Text>
        <Button title="Movies" onPress={() => navigation.navigate('Home')} />
      </View>


      <View>

        <Button
          title="Movies"
          onPress={() => navigation.navigate('Movies')}
        />
        <Text>Movie Info</Text>
        
      </View>
    </>
*/