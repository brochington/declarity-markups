import Immutable from 'immutable'

const cameraActions = {
    setCamera: (state, actions, camera) => {
        return state()
                    .set('camera', camera)
                    .set('cameraState', Immutable.fromJS({
                        originalPosition: {x: -1000, y: -1000, z: 2000},
                        originalRotation: {x: 0, y: 0, z: 0},
                        position: {x: -1000, y: -1000, z: 2000},
                        rotation: {x: 0, y: 0, z: 0},
                    }))
    }
}

export default cameraActions
