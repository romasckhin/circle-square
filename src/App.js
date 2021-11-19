
import './App.css'
import {useState} from "react";

function App() {

  const [color , newColor] = useState(true)

  const border = () => {
    newColor(false)
  }

  const borderNew = () => {
    newColor(true)
  }

  return (
      <div className='container'>

        {color === true?
            <div onClick={border} className='border'>

            </div>
            :
            <div onClick={borderNew} className='borderNew'>

            </div>}

      </div>
  );
}

export default App;
