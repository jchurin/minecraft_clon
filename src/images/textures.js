import { grassImg, dirtImg, logImg, glassImg, woodImg } from './images'
import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

const grassTexture = new TextureLoader().load(grassImg)
grassTexture.wrapS = RepeatWrapping
grassTexture.wrapT = RepeatWrapping
grassTexture.magFilter = NearestFilter

const dirtTexture = new TextureLoader().load(dirtImg)
dirtTexture.wrapS = RepeatWrapping
dirtTexture.wrapT = RepeatWrapping
dirtTexture.magFilter = NearestFilter

const logTexture = new TextureLoader().load(logImg)
logTexture.wrapS = RepeatWrapping
logTexture.wrapT = RepeatWrapping
logTexture.magFilter = NearestFilter

const glassTexture = new TextureLoader().load(glassImg)
glassTexture.wrapS = RepeatWrapping
glassTexture.wrapT = RepeatWrapping
glassTexture.magFilter = NearestFilter

const woodTexture = new TextureLoader().load(woodImg)
woodTexture.wrapS = RepeatWrapping
woodTexture.wrapT = RepeatWrapping
woodTexture.magFilter = NearestFilter

export {
  grassTexture,
  dirtTexture,
  logTexture,
  glassTexture,
  woodTexture
}
