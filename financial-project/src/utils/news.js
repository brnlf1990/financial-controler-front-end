const BASE_URL = 'https://newsapi.org/v2';
const apiKey = 'ab0ca2bb5e154d7e825a09aa94270f3b';
const query  = 'negócios'
export const getNews = () => {
    return fetch(`${BASE_URL}/everything?q=${query}&apiKey=${apiKey}`)
    .then((res) => {
        if (!res.ok){
            throw new Error(`Erro ${res.status}`)
        }
        return res.json();
    })
}