import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet,} from "react-native";

import { MainNavigationProp } from '../routing/Types'
import { MainRoutes } from '../routing/Routes'
import { ButtonWithIcon } from "../components/ButtonWithIcon";



type FavoritesProps = {
    navigation: MainNavigationProp<MainRoutes.Favorites>
}

function Favorites ({navigation}: {navigation: any}) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>     
      <ButtonWithIcon icon={require('../image/Path.png')} onTap={() => navigation.navigate('Home')} width={42} height={42} />    
      <Text style={styles.text}>Favorites</Text>  
     
    </View>
  );
}

export default Favorites;

const styles =  StyleSheet.create({
  text: {
    fontSize: 24,
    padding: 10,
    textAlign: "center",
  },
});