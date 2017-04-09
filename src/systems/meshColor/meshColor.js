import * as THREE from 'three'

const meshColor = (stateObjName) => {
  return {
    create: ({props, state}) => {
      if (props.color) {
        state[stateObjName].material.color = new THREE.Color(props.color)
      }
    },

    update: ({props, state}) => {
      if (props.color) {
        const stateObj = state[stateObjName]
        stateObj.material.color.r = props.color.r
        stateObj.material.color.g = props.color.g
        stateObj.material.color.b = props.color.b
      }
    }
  }
}

export default meshColor
