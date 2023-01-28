import { useStore } from '../hooks/use-store'
import Cube from './cube'

const Cubes = () => {
  const [cubes] = useStore(state => [state.cubes])

  return cubes.map(({ id, pos, texture }) => {
    return <Cube key={id} id={id} position={pos} texture={texture} />
  })
}

export default Cubes
