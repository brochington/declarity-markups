const cameraActions = {
    setCamera: (state, actions, camera) => {
        console.log("setCamera!!!!!", camera)
        return state().set('camera', camera);
    }
}

export default cameraActions
