//PASO 1 - Definición de rutas básicas
import { createStackNavigator } from '@react-navigation/stack'

//exportar todas las pantallas
export enum MainRoutes {
    Home = 'Home',
    Details = 'Details',
    Favorites = 'Favorites',

}
//dar un tipo a todas las pantallas, Definirlos como indefinidos significa que esta ruta no espera ningún parámetro en la carga, mientras que la ruta "Inicio" se puede llamar con una bandera booleana opcional para el atributo "actualizar".
export type MainStackParamList = {
    [MainRoutes.Home]: { update: boolean } | undefined
    [MainRoutes.Details]: undefined
    [MainRoutes.Favorites]: undefined
}

export const MainStack = createStackNavigator<MainStackParamList>()
