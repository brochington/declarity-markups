const lightActions = {
    setLight: (state, actions, lightName, light) => {
        // TODO: Gonna want to have more than one light...
        // return state().set(lightName, light);
        return state().setIn(['lights', lightName], light)
    }
}

export default lightActions
