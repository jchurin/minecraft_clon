import { useBox } from '@react-three/cannon'
import { useState } from 'react'
import { useStore } from '../hooks/use-store'
import * as textures from '../images/textures'

const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState(false)

  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))

  const [removeCube, addCube] = useStore(state => [state.removeCube, state.addCube])

  const activeTexture = textures[`${texture}Texture`]

  const handleClickCube = (event) => {
    event.stopPropagation()
    if (event.altKey) {
      removeCube(id)
    } else {
      const clickedFace = Math.floor(event.faceIndex / 2)
      const { x, y, z } = ref.current.position
      switch (clickedFace) {
        case 0:
          addCube(x + 1, y, z)
          break
        case 1:
          addCube(x - 1, y, z)
          break
        case 2:
          addCube(x, y + 1, z)
          break
        case 3:
          addCube(x, y - 1, z)
          break
        case 4:
          addCube(x - 1, y, z + 1)
          break
        case 5:
          addCube(x, y, z - 1)
          break
        default:
          addCube(x, y, z)
          break
      }
    }
  }

  const handleHoverInCube = (event) => {
    event.stopPropagation()
    setIsHovered(true)
  }

  const handleHoverOutCube = (event) => {
    event.stopPropagation()
    setIsHovered(false)
  }

  return (
    <mesh
      onPointerMove={handleHoverInCube}
      onPointerOut={handleHoverOutCube}
      onClick={handleClickCube}
      ref={ref}
    >
      <boxBufferGeometry attach='geometry' />
      <meshStandardMaterial
        color={isHovered ? 'grey' : 'white'}
        map={activeTexture}
        transparent
        opacity={texture === 'glass' ? 0.7 : 1}
        attach='material'
      />
    </mesh>
  )
}

export default Cube
