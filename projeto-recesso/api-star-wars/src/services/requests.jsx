import axios from 'axios';
import { BASE_URL } from "../constants/urls";


export const getCharacterList = (saveData) => {
    axios.get(`${BASE_URL}/people`)
    .then((response)=> 
        saveData(response.data.results))
    .catch((error)=> 
        console.log(error.response))
}

export const getCharacter = (url, saveData) => {
    axios.get(url)
    .then((response) => saveData(response.data))
    .catch((error) => console.log(error.response))
}

export const getPlanet = (url, saveData) => {
    axios.get(url)
    .then((response) => saveData(response.data.name))
    .catch((error) => console.log(error.response))
}
