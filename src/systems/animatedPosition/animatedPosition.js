const dimensions = ['x', 'y', 'z']

const easings = {
    standard: (t, b, c, d) => {
        return c * t / d + b;
    },
    sinusodial: (t, b, c, d)  => {
	    return c * Math.sin(t/d * (Math.PI/2)) + b;
    }
}

const animatedPosition = (stateObjName) => {
    return {
        create: ({state, props}) => {
            const stateObj = state[stateObjName]

            const {x, y, z} = props.position

            stateObj.position.x = x
            stateObj.position.y = y
            stateObj.position.z = z

            const tick = {
                x: 0,
                y: 0,
                z: 0
            }

            return {lastPosition: props.position, tick}
        },

        update: ({state, props}) => {
            const {lastPosition, tick} = state
            const stateObj = state[stateObjName]
            const {position, animate} = props

            // console.log(stateObj.position.x)
            // t = stateObj.position.x
            // b = original x
            // c = change between original x, and destination value for x
            // d = total time of tween

            let newLastPosition = lastPosition
            let newTick = tick

            if (animate) {
                for(let i = 0; i < dimensions.length; i++) {
                    const dimension = dimensions[i]
                    const originalDimension = lastPosition[dimension]
                    const delta = position[dimension] - originalDimension
                    const duration = 25

                    // const easing = delta * newTick[dimension] / duration + originalDimension
                    const easing = easings.sinusodial(newTick[dimension], originalDimension, delta, duration)

                    if (position[dimension] !== stateObj.position[dimension]) {
                        // console.log(delta, stateObj.position[dimension], duration, originalDimension, easing)
                        if (position[dimension] >= stateObj.position[dimension]) {
                            stateObj.position[dimension] = easing
                        }

                        else if (position[dimension] <= stateObj.position[dimension]){
                            stateObj.position[dimension] = easing
                        }

                        stateObj.position[dimension] = parseFloat(stateObj.position[dimension].toFixed(2))
                        newTick[dimension] += 1;
                    }

                    else {
                        newLastPosition[dimension] = position[dimension]
                        newTick[dimension] = 0;
                    }
                }
            }

            else {
                stateObj.position.x = position.x
                stateObj.position.y = position.y
                stateObj.position.z = position.z

                newLastPosition = position
            }

            return {lastPosition: newLastPosition, tick: newTick}
        }
    }
}

export default animatedPosition
