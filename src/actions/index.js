import canvasActions from './canvas'
import webglActions from './webgl'
import sceneActions from './scene'
import cameraActions from './camera'
import lightActions from './light'

export default {
    ...canvasActions,
    ...webglActions,
    ...sceneActions,
    ...cameraActions,
    ...lightActions
}
