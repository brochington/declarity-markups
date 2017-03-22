/** @jsx Declarity.createEntity */
import Declarity from 'declarity'
import * as THREE from 'three'

class WebGLRenderer {
    getChildContext = ({state}) => {
        const {renderer} = state;

        return {renderer}
    }

    create = ({props, context}) => {
        let renderer = new THREE.WebGLRenderer()
        const { appState, actions} = context
        const canvasWrapper = appState.get('canvasWrapper')

        renderer.setSize(window.innerWidth, window.innerHeight)
        canvasWrapper.appendChild(renderer.domElement)

        actions.setRenderer(renderer)

        return {renderer}
    }
    // Make sure that if an entity doesn't have a render function, that children are still 'rendered'
    render = ({context, children}) => {
        if (context.appState.has('renderer')) {
            return children
        }
    }
}

export default WebGLRenderer
