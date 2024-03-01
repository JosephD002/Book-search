import axios from 'axios';


export async function getBooks (){
    return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyAOEOOPj0GzQWXvDkQtys0ael8bPZZzJnw`)
 }


 //?Coming soon...