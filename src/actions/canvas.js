const canvasActions = {
    setCanvasWrapper: (state, actions, canvasWrapper) => {
        return state().set('canvasWrapper', canvasWrapper)
    }
}

export default canvasActions
