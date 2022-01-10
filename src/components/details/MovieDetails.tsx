import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'



interface Props{
  movie: any
  onMoviePress: (movie:any) => void //esto no es una lista
}

export default class MovieDetails extends Component<Props> {
  render() {
    const img= 'https://image.tmdb.org/t/p/w500'+ this.props.movie.poster_path;

    return(
      <View>
        <Image resizeMode='contain' style={styles.Image} source={{uri:img}}/>
        <Text style={styles.title}> {this.props.movie.title}</Text>
        
      </View>
    )     
  }
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