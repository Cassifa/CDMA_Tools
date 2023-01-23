<template>
    <ContentCard v-if="ans.length">
        <div v-for="key in ans" :key="key.index">
            <div class="card single-post"> 
                {{key}}
            </div> 
        </div>
        <slot></slot>
    </ContentCard>
    <ContentCard v-else-if="cnt">
        <div>
            <div class="card wa"> 
                奇数无法正交！
            </div> 
        </div>
    </ContentCard>
</template>
<script>
import ContentCard from  '../components/ContentCard';
export default{
    name: 'AnsList',
    components:{
        ContentCard,//rasa
    },
    props:{
        ans:{
            type:Array,
        },
        cnt:{
            type:Number,
        }
    },
}
</script>

<style scoped>
.single-post{
    margin-bottom: 10px;
    font-weight: bold;
    text-align: center;
    height: 50%;
}
.single-post:hover{
    box-shadow: 2px 2px 10px lightgray;
    transition: 500ms;
}
.wa:hover{
    text-shadow: 2px 2px 10px rgb(164, 26, 26);
    box-shadow: 2px 2px 10px rgb(243, 6, 6);
    transition: 500ms;
}
.wa{
    padding: 40px;
    background-color: rgb(246, 44, 44);
    height: 50%;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 300%;
    text-align: center;
}
</style>