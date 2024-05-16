import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
    const [tag,setTag] =useState('car');
    const {gif,loader,fetchData} =useGif(tag);
    // const [gif,setGifs] = useState("");
    // const [loader,setLoader] = useState(false);
    
    // async function fetchData(){
    //     setLoader(true)
    //     try{
    //         const url =`https://api.giphy.com/v1/gifs/random?api_key=tEEzTQwMcuTeBKAGL4eRd0Au8gyPP1fG&tag=${tag}&rating=g`;
    //         const {data} =  await axios.get(url);
    //          const imageSource = data.data.images.downsized_large.url;
    //         setGifs(imageSource);
            
    //     }
    //     catch(error){
    //         console.error('Error fetching data:', error);
    //     }
    //     setLoader(false)
    // }

    // useEffect( ()=>{
    //     fetchData();
    // },[])
    // const clickHandler = ()=>{
    //     fetchData();
    // }
    const changeHandler = (event)=>{
      setTag(event.target.value)

    }
  return (
    <div className='w-1/2   bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>
        {
            loader ? (<Spinner/>) : (<img src={gif} width="450" max-height="450" />)
        }
        <input
          className='w-10/12 text-lg py-2 rounded-lg mb-[2px] text-center'
          onChange={changeHandler}
          value={tag}
        />
        
        <button  className="w-10/12 bg-yellow-500 text-lg uppercase py-2 rounded-lg mb-[20px]" onClick={()=>fetchData(tag)}>
            Generate
        </button>
    </div>
  )
}
export default Tag;
