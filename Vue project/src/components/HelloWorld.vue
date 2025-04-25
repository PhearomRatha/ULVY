<template> 
    <section>
        <h1 @click="nameFunctiom">
                {{ msg.toUpperCase() }}
        </h1>
    </section>
</template>
<script>
export default{
    data(){
        return{
            msg:"love u my boy",
        }
    }
}
</script>


<style scoped>
h1{
    color: blueviolet;
    font-size: 20px;

}
</style>

