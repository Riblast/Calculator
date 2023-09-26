import { evaluate } from 'mathjs'

export const handleDelete = (value, setValue) => {
  if (value.slice(-1) === ' ') {
    setValue(value.substring(0, value.length - 3))
  } else if (value.slice(-2) === '0.') {
    setValue(value.substring(0, value.length - 2))
  } else {
    setValue(value.substring(0, value.length - 1))
  }
}

export const addSymbol = (symbol, value, setValue) => {
  setValue(value + symbol)
}

export const calc = (value, setValue) => {
  if (value.slice(-1) !== ' ' && value.slice(-2) !== '0.') {
    try {
      setValue(evaluate(value).toString())
    } catch (error) {
      setValue('ERROR')
      setTimeout(() => {
        setValue('')
      }, 1000)
    }
  }
}
