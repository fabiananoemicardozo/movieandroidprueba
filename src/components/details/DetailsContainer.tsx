//PASO 3 
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

import MovieResource from '../../utils/apiMovie/MovieResourceDetails';
import MovieResourceDetails from '../../utils/apiMovie/MovieResourceDetails';
import Movie from './Movie';

interface Props{
  onMoviePress: (movie:any) => void;
}

export default class DetailsContainer extends Component <Props> {

  state = {
    data: [], 
  }

  componentDidMount = () => {
    this.getMovieId();  
  }

  getMovieId = async () => {
    const mov= await MovieResourceDetails.getTopRated('id')
    return mov
    //this.setState({id: mov})
    //const movies= await MovieResource.getTopRated('id')
    //this.setState({id: movies}) //movies.results
  } 

  render() {   
    return (
      <Movie onMoviePress={this.props.onMoviePress} data={this.state.data}/>   
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
