import Toggle from './toggle'

const Main = () => {
  return (
    <div className="w-full flex justify-between">
      <p className="text-text">Calc</p>
      <div className='flex'>
        <p className="text-text mr-2">Color</p>
        <Toggle/>
      </div>
    </div>
  )
}

export default Main
