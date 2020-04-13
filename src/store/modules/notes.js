import notesDefaultData from '../../data/notes';

const state = {
    notes: []
};

const mutations = {
    'SET_NOTES' (state, notes) {
        state.notes = notes;
        console.log(state.notes);
    },
    'PUSH_NOTE'(state, note) {
        state.notes.push(note);
    },
};

const actions = {
    initNotes: ({commit}) => {
        console.log('notes loaded');
        commit('SET_NOTES', notesDefaultData);
    },
    pushNote: ({commit}, note) => {
        commit('PUSH_NOTE', note);
    },
};

const getters = {
    notes: state => {
        return state.notes;
    },
    search: (state) => (key) => {
      return state.notes.find(element => element.id == key);
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
