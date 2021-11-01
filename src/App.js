import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [error, setError]= useState(false);
  const[list,setList]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
   
    try{
      let colors = new Values(colors).all(10)
      console.log('Hello')
    } catch (err){
      setError(true);
      console.log(err)
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e)=> setColor(e.target.value)} />
          <button className="btn" type="submit">submit</button>
        </form>
      </section>

      <section>
        <h4>List goes here</h4>
      </section>
    </>
  )
}

export default App
