import React,{ useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';

const alankey='';

const App=()=>{
  useEffect(()=>{
    alanBtn({
      key:alankey,
      onCommand:({command})=>{
        if(command === 'testCommand'){
          alert("This Code Was executed");
        }
      }
    })
  },[])
  return(
    <div>
      <h1>AI NEWS APPLICATION</h1>
    </div>
  );
}

export default App;