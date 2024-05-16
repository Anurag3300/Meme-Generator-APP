import React from 'react'
import { useState,useEffect } from 'react';
import axios  from 'axios';

const API_KEY = process.env.Anurag_Pandey;

//  const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;
// const tagMemeUrl =`https://api.giphy.com/v1/gifs/random?api_key=tEEzTQwMcuTeBKAGL4eRd0Au8gyPP1fG&tag=${tag}&rating=g`;

const  useGif = (tag)=> {
  
    const [gif,setGifs] = useState("");
    const [loader,setLoader] = useState(false);
    const randomMemeUrl =`https://api.giphy.com/v1/gifs/random?api_key=1pVYmQvTkE7ux6p7xBuBZ7V6AY7N5CtQ&tag=&rating=g`;
    const tagMemeUrl =`https://api.giphy.com/v1/gifs/random?api_key=1pVYmQvTkE7ux6p7xBuBZ7V6AY7N5CtQ&tag=${tag}&rating=g`;
    
    async function fetchData(tag){
        setLoader(true)
        try{
            const {data} =  await axios.get(tag ?   tagMemeUrl :  randomMemeUrl);
             const imageSource = data.data.images.downsized_large.url;
            setGifs(imageSource);
            
        }
        catch(error){
            console.error('Error fetching data:', error);
        }
        setLoader(false)
    }
    useEffect( ()=>{
        fetchData('car');
    },[])

    return{gif,loader,fetchData}
  
}
export default useGif;