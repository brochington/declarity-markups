const modesActions = {
  setProjectMode: (state) => {
    return state().set('activeMode', 'project')
  },

  setDisciplineMode: (state) => {
    return state().set('activeMode', 'discipline')
  },

  setRevisionsMode: (state) => {
    return state().set('activeMode', 'revisions')
  }
}

export default modesActions
