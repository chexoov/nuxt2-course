<!-- папка для вывода ошибок 404, 500 (зарезервированное имя файла error внутри layouts) nuxt будет сам считывать его как дефолтное при ошибка
 тут уже можешь написать сввой обработчик событий по умолчанию -->
<template>
    <section>
        <h1> Error 404</h1>
        <nuxt-link to="/">Home</nuxt-link>
    </section>
</template>

<style scoped>
h1 {
    font-size: 50px;
    color: red;
}
section {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>