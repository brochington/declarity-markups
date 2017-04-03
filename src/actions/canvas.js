const canvasActions = {
    setStageCanvasId(state, actions) {
        console.log('setStageCanvasId');
        return state()
    },
    setCanvas(state, actions, canvas) {
        return state().set('canvas', canvas)
    }
}

export default canvasActions
