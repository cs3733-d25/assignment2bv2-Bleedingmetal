import { useState } from 'react'
import './App.css'
import Hobby1 from "./Hobby1.tsx";
import Hobby2 from "./Hobby2.tsx";
import Intro from "./Intro.tsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <title/>
        <Intro name1 = "Aditya Krishna" name2= "Stuvat Dash"/>

        <Hobby1/>
        <Hobby2/>
    </div>
  )
}

export default App
