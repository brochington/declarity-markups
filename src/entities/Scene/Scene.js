/** @jsx Declarity.createEntity */
import Declarity from 'declarity'
import * as THREE from 'three'

import PerspectiveCamera from '../PerspectiveCamera'
import AmbientLight from '../AmbientLight'

class Scene {
    create = ({context}) => {
        const {actions} = context;
        const scene = new THREE.Scene()

        actions.setScene(scene)
        return {scene}
    }

    render = ({children, context}) => {
        const {appState} = context

        if (appState.has('scene')) {
            return [
                <PerspectiveCamera key="perspectiveCamera" />,
                <AmbientLight key="ambientLight" />
            ]
        }
    }
}

export default Scene
