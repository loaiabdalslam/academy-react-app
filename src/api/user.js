const axios = require('axios')

axios.defaults.baseURL='http://bikes-rental.herokuapp.com/api'
export const ApiService={

login(){

},

signup(item){
return axios.post('users',item)
}


} 