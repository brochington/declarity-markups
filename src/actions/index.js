import canvasActions from './canvas'
import sceneActions from './scene'
import cameraActions from './camera'
import lightActions from './light'
import audioActions from './audio'
import sheetActions from './sheet'
import modesActions from './modes'
import projectActions from './project'

export default {
    ...canvasActions,
    ...sceneActions,
    ...cameraActions,
    ...lightActions,
    ...audioActions,
    ...sheetActions,
    ...modesActions,
    ...projectActions
}
