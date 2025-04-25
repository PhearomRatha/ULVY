<script>
export default{
    data(){
        return{
            books:[
                {
                    id:1,
                    title:"The day you went a ways"
                },
                {
                    id:2,
                    title:"The day you  love me"
                },
                {
                    id:3,
                    title:"The day you went a ways"
                },
                {
                    id:4,
                    title:"The day you  love me"
                },
            ],
            users:[
                {
                    name:'hi',
                    age:'16'
                },
                {
                    name:'hi',
                    age:'16'
                },
                {
                    name:'hi',
                    age:'16'
                },
            ]
        }
    }

}
</script>
<template>
    <div v-for="book in books" :key="book.id">
        <ul>
            <li>{{book.id }}.{{ book.title }}</li>
        </ul>

    </div>
    <div v-for="user in users" :key="user">
        <p>name :{{ user.name }},age :{{ user.age }}</p>


    </div>
</template>