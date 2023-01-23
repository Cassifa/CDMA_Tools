<template>
    <ContentCard>
        <div v-for="i in need" :key="i">
            <div class="input-group mb-3">
                <input v-model="content[i-1]" type="text" class="form-control number" :placeholder="'请输入第'+i+'个二进制整数,并与其它数据保持位数一致'" aria-label="Example text with button addon" aria-describedby="button-addon1">
            </div> 
        </div>
        <button @click="sure" type="button" class="btn btn-info buttont">提交</button>
    </ContentCard>

</template>

<script>
import { ref } from 'vue';
import ContentCard from './ContentCard';

export default{
    name:"InputNumbers",
    components:{
        ContentCard,
    },

    props:{
        need:{
            type:Number,
        },
    },

    setup(props,context){
        let content=ref([]);
        
        const sure=()=>{
            context.emit('changest',content.value);
            content.value=[];
        };

        return{
            sure,
            content,
        };
    }
    
}
</script>

<style scoped>
.number{
    margin-bottom: 7px;
}
.buttont{
    width: 50%;
    align-self: center;
    display: block;
    margin: 0 auto;
}
.buttont:hover{
    cursor: pointer;
    box-shadow: 5px 5px 10px rgb(13, 121, 148);
    transition: 500ms;
}
</style>