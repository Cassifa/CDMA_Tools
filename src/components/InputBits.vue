<template>
    <ContentCard>
        <div class="guide">
            请输入要获取的数据位数
        </div>
        <div class="input-group mb-3">
            <button @click="submit" class="btn btn-outline-secondary" type="button" id="button-addon1">确定</button>
            <input v-model="content" type="number" min="2" class="form-control" placeholder="1~64bits" aria-label="Example text with button addon" aria-describedby="button-addon1">
        </div>
    </ContentCard>

</template>

<script>
import ContentCard from './ContentCard';
import {ref} from 'vue';

export default{
    name:"InputBits",
    components:{
        ContentCard,
    },

    props:{
        need:{
            type:Number,
            required:true,
        }
    },

    setup(props,context){
        let content=ref('');

        const submit=()=>{
            context.emit('changeneed',content.value);

        };

        return{
            submit,
            content,
        }
    }

}

</script>

<style scoped>
.guide{
    margin-bottom: 10px;
    text-align: center;
}
</style>