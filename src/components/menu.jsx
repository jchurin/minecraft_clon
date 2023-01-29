import { useStore } from '../hooks/use-store'

const Menu = () => {
  const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])

  const handleClickSave = (event) => {
    saveWorld()
  }
  const handleClickReset = (event) => {
    resetWorld()
  }

  return (
    <div className='menu absolute'>
      <button onClick={handleClickSave}>Save</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  )
}

export default Menu
