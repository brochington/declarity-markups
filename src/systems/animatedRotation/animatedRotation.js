const dimensions = ['x', 'y', 'z']

const easings = {
    standard: (t, b, c, d) => {
        return c * t / d + b;
    },
    sinusodial: (t, b, c, d) => {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    }
}

const animatedRotation = (stateObjName) => {
    return {
        create: ({state, props}) => {
            const stateObj = state[stateObjName]

            const {x, y, z} = props.rotation

            stateObj.rotation.x = x
            stateObj.rotation.y = y
            stateObj.rotation.z = z

            const rotationTick = {
                x: 0,
                y: 0,
                z: 0
            }

            return {lastRotation: props.rotation, rotationTick}
        },

        update: ({state, props}) => {
            const {lastRotation, rotationTick} = state
            const stateObj = state[stateObjName]
            const {rotation, animate} = props

            // console.log(stateObj.position.x)
            // t = stateObj.position.x
            // b = original x
            // c = change between original x, and destination value for x
            // d = total time of tween

            let newLastRotation = lastRotation
            let newRotationTick = rotationTick

            if (animate) {
                for (let i = 0; i < dimensions.length; i++) {
                    const dimension = dimensions[i]
                    const originalDimension = lastRotation[dimension]
                    const delta = rotation[dimension] - originalDimension
                    const duration = 25

                    // const easing = delta * newTick[dimension] / duration + originalDimension
                    const easing = easings.sinusodial(newRotationTick[dimension], originalDimension, delta, duration)

                    if (rotation[dimension] !== stateObj.rotation[dimension]) {
                        // console.log(delta, stateObj.position[dimension], duration, originalDimension, easing)
                        if (rotation[dimension] >= stateObj.rotation[dimension]) {
                            stateObj.rotation[dimension] = easing
                        } else if (rotation[dimension] <= stateObj.rotation[dimension]) {
                            stateObj.rotation[dimension] = easing
                        }

                        stateObj.rotation[dimension] = parseFloat(stateObj.rotation[dimension].toFixed(2))
                        newRotationTick[dimension] += 1;
                    } else {
                        newLastRotation[dimension] = rotation[dimension]
                        newRotationTick[dimension] = 0;
                    }
                }
            } else {
                stateObj.rotation.x = rotation.x
                stateObj.rotation.y = rotation.y
                stateObj.rotation.z = rotation.z

                newLastRotation = rotation
            }

            return {lastRotation: newLastRotation, rotationTick: newRotationTick}
        }
    }
}

export default animatedRotation
