<template>
    <div>
        <h1>{{user.name}}</h1>
        <hr />
        <b>Email: {{user.email}}</b>
    </div>
</template>

<script>

export default {
    validate({ params }) {
        console.log(params)
        // проверка на число
        return /^\d+$/.test(params.id)
    },
    // для загрузки какого-то конкретного пользователя
    // либо эмуляции ошибки reject
   async asyncData({ params, error, $axios, store }) {
    // try {        
    //     const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    //     return {user}
    // } catch (e) {
    //     error(e)
    // }
        // return new Promise(( reject) => {
        //     setTimeout(() => {
        //         reject(error(new Error('User not found')))
        //         // resolve({
        //         //     user: {
        //         //         name: `Test user ${params.id}`
        //         //     }
        //         // })
        //     }, 1500)
        // })
        try {
            const user = await store.dispatch('users/fetchUserById', params.id)
            return {user}
        } catch (e) {
            error(e)
        }
    }

}
</script>