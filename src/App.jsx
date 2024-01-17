import { useState } from 'react'
import Convertor from '../components/Convertor'


function App() {
  let [placeHolder, setPlaceHolder] = useState("decimal")

  return(
    <>
      <button className='button' onClick={()=>setPlaceHolder("decimal")}>Decimal</button>
      <button className='button' onClick={()=>setPlaceHolder("hexadecimal")}>Hexadecimal</button>
      <button className='button' onClick={()=>setPlaceHolder("binary")}>Binary</button>
      <Convertor placeh = {placeHolder}/>
    </>
    )
}


export default App