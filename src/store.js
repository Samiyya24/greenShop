// store.js
import { createStore } from 'vuex';

const store = createStore({
    state: {
        cartCount: 0,
    },
    mutations: {
        incrementCartCount(state) {
            state.cartCount++;
        },
    },
    actions: {
        addToCart({ commit }) {
            commit('incrementCartCount');
        },
    },
    getters: {
        cartCount: state => state.cartCount,
    },
});

export default store;
