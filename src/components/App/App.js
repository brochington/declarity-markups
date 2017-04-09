import React, {Component} from "react"
import Declarity from 'declarity'
import Immutable from 'immutable'
import Staction from 'staction'

import PropsToContext from '../PropsToContext'

import Stage from '../../entities/Stage'

import actions from '../../actions'

const initState = Immutable.Map({
    lights: Immutable.Map(),
    activeMode: 'project'
})

const renderDeclarity = (containerEl, context) => {
    Declarity.register(Declarity.createEntity(Stage, {
        key: 'stage_1',
        containerEl
    }), context)
}

class App extends Component {
    state = {
        containerLoaded: false,
        containerEl: null
    }

    componentWillMount() {
        this.staction = new Staction()

        this.staction.init(
            actions,
            () => initState,
            (state) => {
                this.setState(state)
                // renderDeclarity(this.state.containerEl, {
                //     appState: state,
                //     actions: this.staction.actions
                // })
            }
        )
    }

    componentDidUpdate() {
        if (this.state.containerLoaded) {
            renderDeclarity(this.state.containerEl, {
                appState: this.staction.state,
                actions: this.staction.actions,
                containerEl: this.state.containerEl
            })
        }

    }

    onContainerLoad = (el) => {
        this.setState({
            containerLoaded: true,
            containerEl: el,
        })

        // renderDeclarity(el, {
        //     appState: this.staction.state,
        //     actions: this.staction.actions
        // });

    }

    render() {
        return (
            <PropsToContext appState={this.staction.state} actions={this.staction.actions}>
                <div ref={this.onContainerLoad} id="container" />
            </PropsToContext>
        )
    }
}

export default App
