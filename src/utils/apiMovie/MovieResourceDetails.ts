import apiDetails from "./apiDetails"



export default class MovieResourceDetails {
  
  static endpoint = "/3/movie" 
  static getTopRated(id: string, requestConfig = undefined) {
    return apiDetails.get(`${this.endpoint}/${id}?api_key=a74169393e0da3cfbc2c58c5feec63d7`, requestConfig).then(res => res.data)
    .catch(error=>console.log(error))

  }
}
//https://api.themoviedb.org/3/movie/${params.movieid}?api_key=a74169393e0da3cfbc2c58c5feec63d7

//return apiDetails.get(`${this.endpoint}/278?api_key=a74169393e0da3cfbc2c58c5feec63d7=${page}`, requestConfig).then(res => res.data)*/

