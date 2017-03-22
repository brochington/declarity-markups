/** @jsx Declarity.createEntity */
import * as THREE from 'three'


class Raycaster {
    getChildContext = ({state}) => {
        return state
    }

    create = () => {
        const raycaster = new THREE.Raycaster()
        const intersects = []

        return {raycaster, intersects}
    }

    update = ({context, state}) => {
        const {mouse, appState} = context
        const {raycaster} = state
        const camera = appState.get('camera')
        const scene = appState.get('scene')
        // console.log(mouse, appState.toJS());

        raycaster.setFromCamera(mouse, camera)
        let intersects = raycaster.intersectObjects(scene.children)
        //
        // intersets.map(thing => {
        //     thing.object.material.color = new THREE.Color(0, 1, 1)
        // })
        // console.log(intersects)
        return {intersects}
    }

    render = ({children}) => {
        return children;
    }
}

export default Raycaster
