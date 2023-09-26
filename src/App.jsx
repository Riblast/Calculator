import KeyPad from './components/KeyPad/main'
import Screen from './components/screen/main'
import Header from './components/header/main'
import { useState } from 'react'
function App () {
  const [value, setValue] = useState('')
  return (
    <>
  <div className='bg-backgroundMain w-screen h-screen flex justify-center items-center'>
    <div className='w-full xl:w-2/5 h-full p-8 flex flex-col'>
      <Header/>
      <Screen value={value}/>
      <KeyPad value={value} setValue={setValue}/>
    </div>
  </div>
    </>
  )
}

export default App
