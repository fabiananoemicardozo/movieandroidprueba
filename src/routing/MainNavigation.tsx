//PASO 2 - Construir la navegación
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { MainRoutes } from './Routes'
import { MainStack } from './Routes'

import Home from '../screens/Home'
import Details from '../screens/Details'
import Favorites from '../screens/Favorites'

const MainNavigation = (): React.ReactElement => {

   
    return (
        <NavigationContainer>
            <MainStack.Navigator  screenOptions={{ headerShown: false }}>
                <MainStack.Screen name={MainRoutes.Home} component={Home} />
                <MainStack.Screen name={MainRoutes.Details} component={Details} />
                <MainStack.Screen name={MainRoutes.Favorites} component={Favorites} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation;

//MainStack.Navigator  - no me toma el headerMode
//aca tengo que usar un context 