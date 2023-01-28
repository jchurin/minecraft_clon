import { usePlane } from '@react-three/cannon'
import { useStore } from '../hooks/use-store'
import { grassTexture } from '../images/textures'

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], // x, y, z
    position: [0, -0.5, 0] // x, y, z
  }))

  const [addCube] = useStore(state => [state.addCube])

  const handleClickGround = (event) => {
    event.stopPropagation()
    const [x, y, z] = Object.values(event.point).map(c => Math.ceil(c))
    addCube(x, y, z)
  }

  grassTexture.repeat.set(100, 100)

  return (
    <mesh
      onClick={handleClickGround}
      ref={ref}
    >
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={grassTexture} />
    </mesh>
  )
}

export default Ground
