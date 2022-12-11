import axios from "axios" 
const instance = axios.create({ 
baseURL: "your—backend—heroku—url" 
})
export default instance;