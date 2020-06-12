const modal = {
  state: {
    openCreate: false,
    openEdit: false,
    openDelete: false,
    dataEdit: null,
    dataDelete: null
  },
  mutations: {
    SET_CREATE (state) {
      state.openCreate = !state.openCreate
    },
    SET_EDIT (state) {
      state.openEdit = !state.openEdit
    },
    SET_DELETE (state) {
      state.openDelete = !state.openDelete
    },
    SET_DATA_EDIT (state, payload) {
      state.dataEdit = payload
    },
    SET_DATA_DELETE (state, payload) {
      state.dataDelete = payload
    }
  },
  actions: {}
}

export default modal
