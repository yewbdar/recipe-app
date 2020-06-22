import React , { useEffect , useState}from 'react';

import './App.css';
import axios from 'axios'
import Recip from './Recipe'
import {APP_ID ,APP_KEY } from './keys'
function App() {
  
  const [recipe , setRecip] = useState([])
  const [input, setInput] = useState('')
   useEffect(() => {
     getData();
  },[]) 
   const getData =  () => {
     console.log('input',input )
     let  URL
      if(input === ''){
        URL =  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
      }else{
        URL =  `https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`
      }
     axios.get(URL).
    then(response => setRecip(response.data.hits))
   }
  return (
    <div className="App">
      <div className='search-form'>
      <input className='search-bar'  type='text' onChange={(e)=> setInput(e.target.value)}/>
      <button className='search-button' onClick={()=> getData()}>search </button>
      </div>
      <div className='rapper'>
      {console.log('this ',input)}
        {recipe.length > 0 ? recipe.map((recip , index) => {
           const {label,ingredients, image} = recip.recipe
          return <Recip label={label} key= {index} ingredients = {ingredients}  src={image}/>
        }):<h>No recip found </h>} 
      </div>
      
    </div>
  );
}

export default App;
