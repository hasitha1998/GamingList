import axios from 'axios';

const key="dfa9d33c75f644b68ca363b306a00ec7";

const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key);
const getAllGames=axiosCreate.get('/games?key='+key);
const getGameListByGenresId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id);
export default{
    getGenreList,
    getAllGames,
    getGameListByGenresId
}