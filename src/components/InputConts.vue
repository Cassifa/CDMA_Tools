<template>
    <ContentCard>
        <div class="guide"> 
            请输入要判断的数据数
        </div>
        <div class="input-group mb-4">
            <button @click="submit" class="btn btn-outline-secondary" type="button" id="button-addon1">确定</button>
            <input v-model="content" type="number" min="2" class="form-control" placeholder="数据个数" aria-label="Example text with button addon" aria-describedby="button-addon1">
        </div>

        <input v-if="st===0" class="form-control wait show" type="text" value="待判断" disabled readonly>
        <input v-if="st===1" class="form-control ac show" type="text" value="数据正交" disabled readonly>
        <button v-if="st===2" @click="tosee" class="form-control wa show detail" type="button" id="button-addon1">数据不正交</button>
        <div v-if="st===2" class="seedetail">*点此查看详情</div>
        <input v-if="st===3" class="form-control wa show" type="text" value="数据位数不一致!" disabled readonly>
        <input v-if="st===4" class="form-control wa show" type="text" value="数据仅可包含1/0!" disabled readonly>
        <input v-if="st===5" class="form-control wa show" type="text" value="请补全输入" disabled readonly>
        
    </ContentCard>

</template>

<script>
import ContentCard from './ContentCard';
import {ref} from 'vue';

export default{
    name:"InputConts",
    components:{
        ContentCard,
    },

    props:{
        need:{
            type:Number,
            required:true,
        },
        st:{
            type:Number,
            required:true,
            default:0,
        },
    },

    setup(props,context){
        let content=ref('');

        const submit=()=>{
            context.emit('changeneed',content.value);
        };

        const tosee =()=>{
            context.emit('tosee');
        };

        return{
            submit,
            content,
            tosee,
        };
    },
}

</script>

<style scoped>
.guide{
    margin-bottom: 10px;
    text-align: center;
}
.wait{
    background-color: lightgray;
}
.ac{
    background-color: rgb(35, 225, 35);
}
.wa{
    background-color: rgb(250, 5, 5);
}
.show{
    border: 20px;
    text-align: center;
    font-style: italic;
    font-weight: 600;
}

.detail:hover{
    cursor: pointer;
    box-shadow: 2px 2px 5px rgb(243, 6, 6);
    transition: 500ms;
}
.seedetail{
    font-size: 12px;
    text-align: center;
    font-style: italic;
    color: gray;
}
</style>