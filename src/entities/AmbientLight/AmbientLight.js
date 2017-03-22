/** @jsx Declarity.createEntity */
import Declarity from 'declarity'
import * as THREE from 'three'

class AmbientLight {
    create = ({context}) => {
        const {appState, actions} = context

        let light = new THREE.AmbientLight(0x404040)

        const scene = appState.get('scene')

        scene.add(light)

        actions.setLight(light)
        console.log('yo yo?');
        return {light}
    }
}

export default AmbientLight
