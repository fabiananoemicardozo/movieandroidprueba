//PASO 1 - Este componente renderizará sus childrens. Un children es un componente que está incluido en otro y me completa en automatico
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';


/*const MoviesLayout = ({item, navigation}: any) => {
  return(
    <TouchableOpacity
    onPress={() => navigation.navigate('Details', {movie:item})}>

      <Image source={{uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}}/>
      <View/>
        <Text>{item.title}</Text>
        <Text>{item.realse_data}</Text>
        <Text>{item.vote_average}</Text>
    </TouchableOpacity>
  )
}*/
interface Props{
  movie: any
  onMoviePress: (movie:any) => void //esto no es una lista
}

export default function MoviesLayout ({movie, onMoviePress, navigation}: any) {

    const img= 'https://image.tmdb.org/t/p/w500'+ movie.poster_path;

    return(
      <TouchableOpacity style={styles.container}
        onPress={()=>  onMoviePress(movie)}
        >
        <Image resizeMode='contain' style={styles.Image} source={{uri:img}}/>
        <Text style={styles.title}> {movie.title}</Text>

      </TouchableOpacity>
    )     
  }


const styles= StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    borderWidth: 0.5,
    borderColor: "#D7D7D7",
  },
  title:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 21,
    lineHeight: 22,

    paddingVertical: 20,

    color: '#222222',
  },
  Image:{
    width: 72,
    height: 72,
    
  },
})

