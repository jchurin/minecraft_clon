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

  const [removeCube] = useStore(state => [state.removeCube])

  const activeTexture = textures[`${texture}Texture`]

  const handleClickCube = (event) => {
    event.stopPropagation()
    if (event.altKey) {
      removeCube(id)
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
        attach='material'
      />
    </mesh>
  )
}

export default Cube
