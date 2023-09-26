import PropTypes from 'prop-types'
const Button = ({ handleClick, special, value, numberStyles, styles = 'bg-keyBackgroundT border-keyBackgroundShadowT' }) => {
  return (
    <button value={value} onClick={handleClick} className={`h-full w-full ${styles} rounded-md flex items-center justify-center border-b-4`}>
      {
        special === 'true'
          ? (
      <p className={`text-numbers ${numberStyles}`}>
      {value}
      </p>)
          : (
            <p className={'text-numbers text-buttons'}>
            {value}
            </p>
            )
}
    </button>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func,
  numberStyles: PropTypes.string,
  special: PropTypes.string,
  styles: PropTypes.string,
  value: PropTypes.any
}

export default Button
