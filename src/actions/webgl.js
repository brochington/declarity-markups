const webglActions = {
    setRenderer: (state, actions, renderer) => {
        return state().set('renderer', renderer)
    }
}

export default webglActions
