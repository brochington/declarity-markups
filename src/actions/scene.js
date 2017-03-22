const sceneActions = {
    setScene: (state, actions, scene) => {
        return state().set('scene', scene)
    }
}

export default sceneActions
