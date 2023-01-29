import { useState, useEffect } from 'react'
import { useKeyboard } from '../hooks/use-keyboard'
import { useStore } from '../hooks/use-store'
import * as images from '../images/images'

const TextureSelector = () => {
  const [visible, setVisible] = useState(false)
  const [texture, setTexture] = useStore(state => [state.texture, state.setTexture])

  const { dirt, grass, glass, wood, log } = useKeyboard()

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false)
    }, 1800)
    setVisible(true)
    return () => {
      clearTimeout(visibilityTimeout)
    }
  }, [texture])

  useEffect(() => {
    const options = {
      dirt,
      grass,
      glass,
      wood,
      log
    }
    const selectedTexture = Object.entries(options)
      .find(([key, isEnabled]) => isEnabled)

    if (selectedTexture) {
      const [textureName] = selectedTexture
      setTexture(textureName)
      console.log(selectedTexture)
    }
  }, [dirt, grass, glass, wood, log])

  return (
    <div className={`texture-selector ${visible ? '' : 'hidden'}`}>
      {Object
        .entries(images)
        .map(([imgKey, image]) => {
          return (
            <img
              className={texture === imgKey.replace('Img', '') ? 'selected' : ''}
              key={imgKey}
              src={image}
              alt={imgKey}
            />
          )
        })}
    </div>
  )
}

export default TextureSelector
