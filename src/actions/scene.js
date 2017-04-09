import {Scene} from 'three'
import Immutable from 'immutable'

const projects = [{
  id: 1,
  projectName: 'Ceder Sinai',
  imageName: 'Cedar+Sinai+Arch+Combined+Scans',
  pageCount: 20
}, {
  id: 2,
  projectName: 'St Jude Hospital',
  imageName: 'St Jude Hospital',
  pageCount: 20
}, {
  id: 3,
  projectName: 'True Food',
  imageName: 'Architectural Tysons II',
  pageCount: 140
}]

const sceneActions = {
    createScene: (state, actions, sceneID) => {
        const scene = new Scene()
        return state().setIn(['scenes', sceneID], scene);
    },
    setScene: (state, actions, scene) => {
        return state().set('scene', scene)
    },
    initScene: (state) => {
      return state().set('projects', Immutable.fromJS(projects))
    }
}

export default sceneActions
