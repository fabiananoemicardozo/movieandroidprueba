//PASO 2 - Componente que renderizará un listado de movies que vendrá via props
import React, { Component, useState } from 'react'
import { ActivityIndicator, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import MoviesLayout from './MoviesLayout';

/*export default function ListMovies ({navigation}: any){
  const [listMovies, setlistMovies] = useState();

    //Este return dice, que cada elemento de mi lista debe ser visualizado de x forma
    return(
      <FlatList
      data={listMovies}
      keyExtractor={(item, index) => 'key' + index }
      renderItem={({item}) => {
        return <MoviesLayout movie={item} navigation={navigation}/>;
      }}
      onEndReachedThreshold={0}/>
    )
  
}*/



interface Props{ //siempre debo definirlo en la clase
  data: any[] //debo decir que es un array cuando se refiere a una lista
  onMoviePress: (movie:any) => void

}
export default class ListMovies extends Component<Props>{
  
  render(){

    //Este return dice, que cada elemento de mi lista debe ser visualizado de x forma
    return(
    <>
      <FlatList
      data={ this.props.data } // data es la fuente de información para la lista.
      renderItem={({item}) => <MoviesLayout onMoviePress={this.props.onMoviePress} movie={item} />} //renderItem toma un elemento de la fuente y devuelve un componente formateado para representar.
      />    
    </>
    )
  }
}
     
       






