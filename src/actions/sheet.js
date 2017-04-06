import Immutable from 'immutable'

const sheetActions = {
    setSheets: (state, actions, sheets) => {
        const Isheets = Immutable.fromJS(sheets)
        return state()
                 .set('sheets', Isheets)
                 .set('activeSheet', Isheets.first())
    },

    setActiveSheet: (state, actions, sheet) => {
        return state().set('activeSheet', sheet)
    },

    viewSheet: (state, actions, sheetID) => {
        return state()
                .update('sheets', sheets => sheets.map(sheet => {
                    if (sheet.get('id') > sheetID) {
                        return sheet.update('position', position => position
                                        .set('z', sheet.getIn(['originalPosition', 'z']) + 30)
                                        .set('x', sheet.getIn(['originalPosition', 'x']) + 100))
                                    .update('rotation', rotation => rotation.set('y', -1))
                    }

                    else {
                        return sheet
                                .update('position', position => sheet.get('originalPosition'))
                                .update('rotation', rotation => sheet.get('originalRotation'))
                    }
                }))
                .update('cameraState', cameraState => {
                    return cameraState
                                .setIn(['position', 'x'], 0)
                                .setIn(['position', 'y'], -50)
                                .setIn(['position', 'z'], sheetID + 200)

                })
    }
}

export default sheetActions
