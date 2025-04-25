<script>
export default {
    data() {
        return {
            msg: "Hi, I am clock!",
            ms:"hi it will be rendered once "
        }
    }
}
</script>

<template >
    <p v-cloak>{{ msg }}</p>
    <p v-once>{{ ms }}</p>

</template>

<style>
[v-cloak] {
    display: none;
}
</style>
