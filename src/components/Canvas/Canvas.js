import React from 'react'
import Declarity from 'declarity'

import AbstractComponent from '../AbstractComponent'

import Stage from '../../entities/Stage'

class Canvas extends AbstractComponent {
    onCanvasWrapperLoad = (el) => {
        this.context.actions.setCanvasWrapper(el)
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const {appState} = nextContext;

        if (appState.has('canvasWrapper')) {
            Declarity.register(Declarity.createEntity(Stage, {
                canvasWrapper: appState.get('canvasWrapper'),
                key: 'mainStage'
            }), nextContext)
        }
    }

    render() {
        return (
            <div>
                <div ref={this.onCanvasWrapperLoad}></div>
            </div>
        )
    }
}

export default Canvas
