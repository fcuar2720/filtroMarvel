const ts="77";
const apikey="8f3d64c5da6c1e68fc31906e6427d0ef";
const hash="2d046337859f156e140920b780f9ae65";


export const getCharacters=({limit,nameStartsWith,setResponse})=>{
    fetch("http://gateway.marvel.com/v1/public/characters?limit="+limit+"&nameStartsWith="+nameStartsWith+"&ts="+ts+"&apikey="+apikey+"&hash="+hash)
    .then(response=>response.json())
    .then(respJson=>{
        setResponse(respJson.data);
    })
}