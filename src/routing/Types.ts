//PASO 4 - Navegando Nuestras Rutas
//Al usar React Navigation, todas las pantallas que son hijos directos del navegador tienen acceso al objeto "navegación".
//Usar esto con tipado fuerte puede ser un poco complicado porque el tipo de prop de navegación toma 2 genéricos, el objeto de lista de parámetros que definimos anteriormente y el nombre de la ruta actual.
//No queremos reconstruir esto en cada componente de pantalla que necesita acceder a la herramienta de navegación, así que agregaré un archivo types.ts al directorio enrutamiento / e importaré tanto la enumeración MainRoutes como la MainStackParamList que contiene todas nuestras rutas definidas y sus anotaciones.
//Ahora podemos usar esto para anotar el accesorio de navegación en nuestros componentes.

import { StackNavigationProp } from '@react-navigation/stack'
import { MainRoutes, MainStackParamList } from './routes'

export type MainNavigationProp
<RouteName extends keyof MainStackParamList = MainRoutes> = StackNavigationProp <MainStackParamList, RouteName>