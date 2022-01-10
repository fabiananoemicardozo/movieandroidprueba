import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Details from '../screens/Details';
import MoviesLayout from './movies/MoviesLayout';

export function Favorite({route, navigation}: any){
  const [favoriteMovies, setFavoriteMovies] = useState();

  

  useFocusEffect(() => {
    getData();
  })
  const getData = async () => {
    try{
      AsyncStorage.getItem('FavoriteMovies').then(value => {
        if (value != null){
          setFavoriteMovies(JSON.parse(value));
        }
      });
    }catch (error){
      console.log(error);
    }
  };



    return(
      <FlatList
      data={favoriteMovies}
      keyExtractor={(item, index) => 'key' + index }
      renderItem={({item}) => {
        return <MoviesLayout movie={item} navigation={navigation}/> 
      }} />

      
    )
}