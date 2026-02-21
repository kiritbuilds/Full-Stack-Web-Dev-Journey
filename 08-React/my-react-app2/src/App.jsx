import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Contact from './components/Contact'

function App() {
  const [text ,setText] = useState("Hey I Am A Nice Person")
  
  const handleClick1 = () =>{
    setText("Hey I Am A Bad Person")
  }

  const handleClick2 = () =>{
    setText("Hey I Am A ok ok Person")
  }

  const items = ["Home" , "Services" , "About" , "Join Us" , "Contact"]
  const isDiabetic = false

  return (
    <>
    <Navbar logoText="John's Coffee" color="blue" items={items} />
         <div className='text light-purple'>{text}</div>
         <div style={{backgroundColor: "red"}}>
         <button onClick={handleClick1}>Buy Coffe 1</button>
        
         {/* {isDiabetic && <button onClick={handleClick2}>Buy Sugari Coffee</button>}
         <button onClick={()=> alert("Inline Click")}>Buy Coffee Not Sugary</button>          */}

         {/* Ternary Operator Using Redering */}
         {isDiabetic ? <button onClick={handleClick2}>Buy Sugari Coffee</button>:
         <button onClick={()=> alert("Inline Click")}>Buy Coffee Not Sugary</button> }
         </div>
         <Contact />
    </>
  )
}

export default App
