import Immutable from 'immutable'

const cameraActions = {
    setCamera: (state, actions, camera) => {
        return state()
                    .set('camera', camera)
                    .set('cameraState', Immutable.fromJS({
                        originalPosition: {x: -100, y: -100, z: 200},
                        originalRotation: {x: 0, y: 0, z: 0},
                        position: {x: -100, y: -100, z: 200},
                        rotation: {x: 0, y: 0, z: 0},
                    }))
    }
}

export default cameraActions
