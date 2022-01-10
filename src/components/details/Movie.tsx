/*import { View, Text } from "react-native";
import { Image } from "react-native-elements/dist/image/Image";

interface Props {
	backdrop_path: string
	original_title: string
	overview: string
}

export function Movie(this: any, props: Props) {

	return (
			<View>
        <Image source={{uri: 'https://image.tmdb.org/t/p/w500'}}>{props.backdrop_path}</Image>
				<Text>{props.original_title}</Text>
				<Text>{props.overview}</Text>
			</View>
		
	);
}*/

import React, { Component } from 'react' //PASO 2
import { FlatList } from 'react-native-gesture-handler';

import MovieDetails from './MovieDetails';

interface Props{
  data: any[] 
  onMoviePress: (movie:any) => void

}
export default class Movie extends Component<Props>{
  
  render(){
    return(
    <>
      <FlatList
      data={ this.props.data } 
      renderItem={({item}) => <MovieDetails onMoviePress={this.props.onMoviePress} movie={item} />} 
      />    
    </>
    )
  }
}


/*import React, { useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native'

import { ButtonAddRemove } from './ButtonAddRemove'

export interface MovieModel{
  id: string;
  title: string;
  overview: string;
  poster_path: [string];
  unit: number;
}




interface MovieProps{ 
    item: MovieModel;
    onTap: Function;
    onUpdateCart: Function;
 }
 
const Movie: React.FC<MovieProps> = ({ item, onTap, onUpdateCart }) => {


const didUpdateCart = (unit: number) => {
    
    item.unit = unit;
    onUpdateCart(item);
}
  
return (<View>

        <Image source={{ uri: `${item.poster_path[0]}`}} style={{ width: 100, height: 100, borderRadius: 20, backgroundColor: '#EAEAEA'}} /> 
        <TouchableOpacity  onPress={() => onTap(item)} 
        style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ display: 'flex', flex: 7, padding: 10}}>
                <Text>{item.title}</Text>
                <Text>{item.overview}</Text>
            </View>
            <View style={{ display: 'flex', flex: 5, padding: 10, justifyContent:'space-around', alignItems: 'center'}}>
                <ButtonAddRemove 
                onAdd={() => {
                    let unit = isNaN(item.unit) ? 0 : item.unit;
                    didUpdateCart( unit + 1);
                }} 
                onRemove={() => {
                    let unit = isNaN(item.unit) ? 0 : item.unit;
                    didUpdateCart( unit > 0 ? unit - 1 : unit);
                }} 
                qty={item.unit} />
            </View>
        </TouchableOpacity> 

</View>)}




 export { Movie }


/*import React from "react";
import { View, Text } from "react-native";
import { Image } from "react-native-elements/dist/image/Image";

interface Props {
	backdrop_path: string
	original_title: string
	budget: number
	id: number
	overview: string
	vote_average: string
	realse_date:string
}

function Movie (props: Props) {
 
	return (
		<View>
      
      

			<View>
				<Text>{props.original_title}</Text>
				<Text>{props.vote_average}</Text>
				<Text>{props.realse_date}</Text>
				<Text>{props.overview}</Text>
				<Text>{props.budget}</Text>
				<Text>{props.id}</Text>
			</View>
		</View>
	);
}
export default Movie;*/


