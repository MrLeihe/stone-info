import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // current is mobile or pc mode
        mobileMode: false,

        // the component name of current loaded page 
        loadedPageComName: ''
    },

    mutations: {
        setMobileMode(state, mobileMode) {
            state.mobileMode = mobileMode
        },

        setLoadedPageComName(state, loadedPageComName) {
            state.loadedPageComName = loadedPageComName
        }
    },
})