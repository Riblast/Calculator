import PropTypes from 'prop-types'
import Button from './Button'
import { addSymbol, calc, handleDelete } from '../../libs/operators'

const KeyPad = ({ value, setValue }) => {
  const handleClick = (e) => {
    setValue(value + e.currentTarget.value)
  }
  console.log(value)
  return (
    <div className='p-4 w-full h-full bg-backgroundKeypad rounded-md'>
    <div className="h-full grid grid-cols-4 gap-4">
      <Button handleClick={handleClick} value={'7'}/>
      <Button handleClick={handleClick} value={'8'}/>
      <Button handleClick={handleClick} value={'9'}/>
      <Button handleClick={() => value.length >= 1 && handleDelete(value, setValue)} special={'true'} value={'del'} numberStyles={'text-buttonsSpecial'} styles={'bg-keyBackgroundP border-keyBackgroundShadowP'}/>
      <Button handleClick={handleClick} value={'4'}/>
      <Button handleClick={handleClick} value={'5'} />
      <Button handleClick={handleClick} value={'6'} />
      <Button handleClick={() => value.length >= 1 && addSymbol(' + ', value, setValue)} value={'+'}/>
      <Button handleClick={handleClick} value={'1'} />
      <Button handleClick={handleClick} value={'2'} />
      <Button handleClick={handleClick} value={'3'} />
      <Button handleClick={() => value.length >= 1 && addSymbol(' - ', value, setValue)} value={'-'}/>
      <Button handleClick={handleClick} value={'.'} />
      <Button handleClick={handleClick} value={'0'} />
      <Button handleClick={() => value.length >= 1 && addSymbol(' / ', value, setValue)} value={'/'} />
      <Button handleClick={() => value.length >= 1 && addSymbol(' * ', value, setValue)} value={'x'}/>
      <Button handleClick={() => setValue('')} special={'true'} value={'RESET'} numberStyles={'text-buttonsSpecial'} styles='bg-keyBackgroundP border-keyBackgroundShadowP  col-start-1 col-end-3'/>
      <Button handleClick={() => value.length >= 1 && calc(value, setValue)} special={'true'} value={'='} numberStyles={'text-buttonsEqual'} styles='bg-keyBackgroundS border-keyBackgroundShadowS  col-start-3 col-end-5'/>
    </div>
    </div>
  )
}

KeyPad.propTypes = {
  result: PropTypes.func,
  setValue: PropTypes.func,
  value: PropTypes.any
}

export default KeyPad
