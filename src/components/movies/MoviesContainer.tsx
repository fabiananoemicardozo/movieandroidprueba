//PASO 3 
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

import MovieResource from '../../utils/apiMovieList/MovieResource';
import ListMovies from './ListMovies';

interface Props{
  onMoviePress: (movie:any) => void; //no hay valor de retorno
}

//este componente se encarga de la logistica
export default class MoviesContainer extends Component <Props> {
//Crear un state, en el es donde se actualizan los datos.
  state = {
    data: [], ////Array de datos que se actualiza cuando se llama a la .
  }
  
  //Ejecuta al metodo, dentro del ciclo de vida del container
  componentDidMount = () => {
    this.getAllMovies();  
  }

  //Crear un metodo que se conectará con el servicio, cuando se obtenga la resolución exitosa de la promesa se actualizara el estado del container.
  getAllMovies = async () => {
    const movies= await MovieResource.getTopRated('1')
    this.setState({data: movies.results})
  } 
//pasar la propiedad data del estado del container como propiedad del componente, esto para poder tomarlo y renderizarlo
  render() {
    
    return (

      <ListMovies onMoviePress={this.props.onMoviePress} data={this.state.data}/>
      
      
     
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 24,
    backgroundColor: "#c0c0c0"
  },
  movies:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 20,

    textAlign: 'center',
    letterSpacing: -0.41,

    color: '#030303',
  },
  favorites:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 17,
    lineHeight: 20,


    textAlign: 'right',
    letterSpacing: -0.41,

    color: '#007AFF',
  }
})
