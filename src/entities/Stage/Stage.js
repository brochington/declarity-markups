/** @jsx Declarity.createEntity */
import Declarity from 'declarity'

import WebGLRenderer from '../WebGLRenderer'
import Scene from '../Scene'



class Stage {
    create = () => {

    }

    render = () => {
        return [
            <WebGLRenderer key="webgl-renderer">
                <Scene key="scene" />
            </WebGLRenderer>

        ]
    }
}

export default Stage
