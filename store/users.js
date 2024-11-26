//vuex

export const state = () => ({
    users: [],
})

export const mutations = {    
    setUsers(state, users) {
        state.users = users
    }
}

export const actions = {
    async fetchUsers({commit}) {
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
            commit('setUsers', users)
        } catch (e) {
            commit('setError', e, {root: true})
        }
    },
    async fetchUserById({commit}, id) {
        try {
            return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
        } catch (e) {
            commit('setError', e, {root: true})
        }
    }
}

export const getters = {
    users: state => state.users
}