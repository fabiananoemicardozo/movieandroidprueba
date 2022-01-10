//PASO 2
import api from "./api"


//¿ por qué esta class no lleva el: extends Component?
//¿puedo itilizar request porque he importado api? en api esta axios.
export default class MovieResource {
  static endpoint = "/3/movie" //Los endpoints son las URLs de un API o un backend que responden a una petición.
  static getTopRated(page: string, requestConfig = undefined) {
    return api.get(`${this.endpoint}/top_rated?api_key=a74169393e0da3cfbc2c58c5feec63d7&page=${page}`, requestConfig).then(res => res.data)
  }
}
//ts es cuando es solo logica y tsx es cuando hago componentes
//La propiedad “endpoint” ptoporciona la URI a donde realizará la petición.
//getTopRated me permite ver el valor de page y requestConfig
//al metodo getTopRated le damos como parametro 'page' para que capture la pagina que yo quiero, 
//y requestConfig: que es una solicitando una configuracion
//luego en return, res me devuelve una resuesta http deseada,
//tomo la primera parte de del link completo con ${this.endpoint}
//tomo el resto del link, y al final tomo ${page} para no darle una pagina especifica. y al final con la configuracion me devuelve la respuesta deseada
