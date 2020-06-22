import React from 'react'
import    './Recip.css'
const Recip = (props) => {
    const {label,ingredients, src} = props
    console.log()
    return (
        
            <div className='recip-container'>
             <h1>{label}</h1>
             <ol>
                 {ingredients.map((rep, index) => <li key={index}>{rep.text}</li>)}
             </ol>
             <img className='imgs' src={src}/>
         </div>
     
         
    )
}

export default  Recip 