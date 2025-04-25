<script>
    export default{
        data(){
            return{
                profileImage:'https://i.pinimg.com/originals/43/a4/9b/43a49b285a957f21cf0cdc81836f64dc.gif',
                userName:'Ratha'

            }
        }
    }
</script>
<template>
    <div>
        <h1>{{userName}}</h1>
        <img v-bind:src="profileImage"  style="width:100px; height:100px;">

    </div>

</template>