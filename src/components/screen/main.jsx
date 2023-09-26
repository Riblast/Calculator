import PropTypes from 'prop-types'
const Main = ({ value }) => {
  return (
    <div className="w-full h-32 bg-backgroundScreen flex items-center p-2 justify-end rounded-md mb-4 mt-4">
      <p className="text-text text-numbers">{value}</p>
    </div>
  )
}

Main.propTypes = {
  value: PropTypes.any
}

export default Main
