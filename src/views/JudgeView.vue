<template>
    <ContentCard style="text-align:center">
        <div class="row" style="text-align:center">

          <div class="col-sm-7 col-md-5 col-lg-4">
                <InputConts :need="need" :st="st" @changeneed="changeneed" @tosee="tosee"></InputConts>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-7">
                <InputNumbers :need="need" @changest="changest">
                </InputNumbers>
          </div>

          <div class="col-sm-11 col-md-11 col-lg-11">
                <SeeDetail :see="see" :wrong="wrong">
                </SeeDetail>
          </div>
        </div>
    </ContentCard>
</template>

<script>
import { ref } from 'vue';
import ContentCard from '../components/ContentCard';
import InputConts from '../components/InputConts';
import InputNumbers from '../components/InputNumbers';
import SeeDetail from '../components/SeeDetail'

function check(a,b){
  let x=0,y=0;
  for(let i=0;i<a.length;i++){
    if(a[i]===b[i])x++;
    else y++;
  }
  return x==y;
}

export default {
    name: 'JudgeView',
    components: {
      InputConts,//输入输出
      ContentCard,
      InputNumbers,//输入数据
      SeeDetail,
    },

    setup(){
      let need=ref(2);//需要的输入判断数据数
      let st=ref(0);//是否时第一次
      let wrong=ref([]);//错误组合
      let see=ref(false);//是否查看

      const changeneed=(content)=>{
        if(need.value<2)return;
        need.value=content;
      }

      const changest=(content)=>{
        see.value=false;
        wrong.value=[];
        st.value=0;
        if(content.length!=need.value){
          st.value=5;
          return;
        }
        //检验长度合法
        for(let i=0;i<need.value;i++){
          for(let j=i+1;j<need.value;j++){
            if(content[i].length!=content[j].length){
              st.value=3;
              return;
            }
          }
        }
        //检验字符合法
        for(let i in content){
          for(let j=0;j<content[i].length;j++)
            if(content[i][j]!='0'&&content[i][j]!='1'){
                st.value=4;
                return;
            }
        }
        //检验正交(不正交则退出)
        for(let i=0;i<need.value;i++){
          for(let j=i+1;j<need.value;j++){
            if(!check(content[i],content[j])){
              st.value=2;
              // if(!(wrong.value.includes([content[i],content[j]]))){
              //       console.log([content[i],content[j]]);
              wrong.value.push([content[i],content[j]]);
            }//去重
          }
        }
        if(st.value===2)return;
          //正交
        st.value=1;
      }

      const tosee=()=>{
        see.value=true;
      }

      return{
        st,
        need,
        wrong,
        see,
        changeneed,
        changest,
        tosee,
      }
    }
}
</script>

<style scoped>
</style>
  