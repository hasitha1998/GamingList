import axios from 'axios';

const key="dfa9d33c75f644b68ca363b306a00ec7";

const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key);
export default{
    getGenreList
}