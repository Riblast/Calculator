import { useEffect, useState } from 'react'
import './toggle.css'
const Toggle = () => {
  const storage = JSON.parse(localStorage.getItem('theme'))

  const [switchState, setSwitchState] = useState({
    switchPosition: storage?.switchPosition ?? 'left', animation: null
  })
  const [theme, setTheme] = useState(storage?.theme ?? 'Theme1')

  document.querySelector('html').setAttribute('data-theme', theme)

  useEffect(() => {
    const { switchPosition } = switchState
    localStorage.setItem('theme', JSON.stringify({ theme, switchPosition }))
  }, [theme, switchState])

  const getSwitchAnimation = (position) => {
    const { switchPosition } = switchState
    let animation
    switch (position) {
      case 'center':
        setTheme('Theme2')
        if (switchPosition === 'left') {
          animation = 'left-to-center'
        } else if (switchPosition === 'right') {
          animation = 'right-to-center'
        }
        break
      case 'right':
        setTheme('Theme3')
        if (switchPosition === 'left') {
          animation = 'left-to-right'
        } else if (switchPosition === 'center') {
          animation = 'center-to-right'
        }
        break
      case 'left':
        setTheme('Theme1')
        if (switchPosition === 'center') {
          animation = 'center-to-left'
        } else if (switchPosition === 'right') {
          animation = 'right-to-left'
        }
        break
    }
    setSwitchState({ switchPosition: position, animation, theme })
  }

  return (
    <div className='ml-2 inline-block align-middle w-10'>

      <div className='flex justify-around'>
      <label className='text-text text-xs' htmlFor='left'><h4>1</h4></label>
      <label className='text-text text-xs' htmlFor='center'><h4>2</h4></label>
      <label className='text-text text-xs' htmlFor='right'><h4>3</h4></label>
      </div>
    <div className='flex justify-between rounded-full bg-backgroundKeypad w-full h-4'>
    <div className={`switch ${switchState.animation} ${switchState.switchPosition}-position bg-keyBackgroundS h-3 w-3 rounded-full absolute top-[50px]`}/>
    <input
    className='opacity-0'
      defaultChecked
      onChange={(e) => { getSwitchAnimation(e.target.value) }}
      id='left'
      name='map-switch'
      value='left'
      type='radio'
      />

      <input
      className='opacity-0'
      onChange={(e) => { getSwitchAnimation(e.target.value) }}
      id='center'
      name='map-switch'
      value='center'
      type='radio'
      />

      <input
      className='opacity-0'
      onChange={(e) => { getSwitchAnimation(e.target.value) }}
      id='right'
      name='map-switch'
      value='right'
      type='radio'
      />
    </div>

    </div>
  )
}

export default Toggle
