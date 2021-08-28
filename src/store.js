import { createStore } from "framework7";

export const store = createStore({
    state: {
        list: [
            { id: 1, text: "Buy new sweatshirt", checked: false },
            { id: 2, text: "Begin promotional phase", checked: false },
            { id: 3, text: "Read an article", checked: true },
            { id: 4, text: "Try not to fall asleep", checked: false },
            { id: 5, text: "Watch 'Sherlock'", checked: false },
            { id: 6, text: "Begin QA for the product", checked: false },
            { id: 7, text: "Go for a walk", checked: false }
        ]
    },
    actions: {
        add({ state }, payload) {
            state.list = [{
                id: Date.now(),
                text: payload.text,
                checked: false
            }, ...state.list];
        },
        updateChecked({ state }, payload) {
            const itmIndex = state.list.findIndex(itm => itm.id == payload.id);
            state.list.splice(itmIndex, 1, payload);
            state.list = [...state.list];
        }
    },
    getters: {
        list({ state }) {
            return state.list;
        }
    }
});
