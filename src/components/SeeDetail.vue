<template>
    <!-- {{wrong}} -->
    <div v-if="see">
    <div v-for="(item,index) in wrong " :key="index">
        <ContentCard v-if="!check(item[0],item[1])" class="tag">
            第{{index+1}}条错误： {{item[0]}} {{item[1]}} 在传输数据相同时无法解码
        </ContentCard>
        <ContentCard v-if="check(item[0],item[1])" class="tag">
            第{{index+1}}条错误： {{item[0]}} {{item[1]}}在传输数据不同时无法解码
        </ContentCard>
    </div>
    </div>
</template>
    
<script>
import ContentCard from './ContentCard';

export default{
    name:"SeeDetail",

    components:{
    ContentCard,
},

    props:{
        wrong:{
            type:Array,
        },
        see:{
            type:Boolean,
            required:true,
        }
    },

    setup(){
        const check=(a,b)=>{
            let x=0,y=0;//x相同y不同
            for(let i=0;i<a.length;i++){
                if(a[i]===b[i])x++;
                else y++;
            }
            return x>y;//true时传不同时无法解码
        }

        return{
            check,
        }
    }

}
</script>
    
<style scoped>
.tag{
    margin-bottom: 10px;
    font-weight: bold;
    text-align: center;
    height: 50%;
}
.tag:hover{
    box-shadow: 2px 2px 10px lightgray;
    transition: 500ms;
}
</style>