import React from 'react'
import {useState} from 'react'

function Convertor({placeh}) {
  let [inputValue, setInputValue] = useState("")
  const handleConvert = (inputValue, placeh) =>{
    switch(placeh){
      case "decimal":
        // decimal to binary
        let no = inputValue
        let binary = ""

        while(no!=1){
          binary = (no%2) + binary
          no = parseInt(no/2,10)
        }
        binary="01"+binary
        console.log("binary "+binary);
  
        // decimal to hexadecimal 
        let hexChar = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'] // LIST THAT STORES HEX CHARACTERS
        let hex = ""
        no = inputValue
        while(no!=0){
          hex =hexChar[no%16] + hex
          no = parseInt(no/16,10)
        }
        console.log("hex " +hex);


        break

      case "hexadecimal":
        // hexadecimal to decimal 

        // hexadecimal to binary 
        
        break
      default:
        break
      
    }
  }
  return (
    <div>
      <div className='inputBox' >
      <label htmlFor="input">
        <input  onChange={(e)=>setInputValue(e.target.value)} type="text" required/>
        <span>{placeh}</span>
        <button className='button' onClick={() =>handleConvert(inputValue, placeh)}>CONVERT</button>
      </label>
      </div>
    </div>
  )
}



export default Convertor