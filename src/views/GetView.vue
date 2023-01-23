<template>
    <ContentCard style="text-align:center">
        <div class="row" style="text-align:center">
            <div class="col-sm-7 col-md-5 col-lg-4">
                  <InputBits :need="need" @changeneed="changeneed">
                  </InputBits>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-7">
                  <AnsList :ans="ans" :cnt="cnt">
                  <div class="input-group col-sm-12 col-md-6 col-lg-4">
                  <button @click="changecopycnt" class="btn btn-outline-secondary" type="button" id="button-addon1">确定</button>
                  <input v-model="contentcopy" type="number" min="1" :max="copycnt" class="form-control" :placeholder="'选择复制个数，默认'+copycnt+'个，最大'+copycnt+'个'" aria-label="Example text with button addon" aria-describedby="button-addon1">
                  </div>
                  <button @click="copy" class="copy">一键复制</button>
                  </AnsList>
            </div>
        </div>
    </ContentCard>
</template>
  
<script>
import ContentCard from '../components/ContentCard';
import InputBits from '../components/InputBits';
import AnsList from '../components/AnsList';
import {ref} from 'vue';

export default {
    name: 'GetView',
    components: {
      ContentCard,
      AnsList,
      InputBits,
    },
    
    setup(){
      let need=ref(2);
      let ans=ref([]); 
      let cnt=ref(0);
      let copycnt=ref(0);//复制数
      let contentcopy=ref();

      const changeneed=(content)=>{
        cnt.value=1;
        need.value=content;
        ans.value.splice(0,ans.value.length);
        let t=need.value;
        let k=need.value;
        while(t){
            if(k&1)break;
            let st='';
            let now=1;
            for(let i=0;i<k/t;i++){
                for(let j=0;j<t;j++){
                  if(now)st+='1';
                  else st+='0';
                }
                now=!now;
            }
            ans.value.push(st);
            if(t&1)break;
            t/=2;
        }
        copycnt.value=ans.value.length;
      }

      const copy=()=>{
              let now='';
              console.log(copycnt.value);
              for(let i=0;i<copycnt.value;i++){
                now+=ans.value[i];
                now+='  ';
              }
              let oInput=document.createElement('input');
              oInput.value=now;
              document.body.appendChild(oInput);
              oInput.select();
              document.execCommand('Copy');
              oInput.remove();
        }
      
      const changecopycnt=()=>{
          let t=contentcopy.value;
          if(t<1||t>ans.value.length)return;
          copycnt.value=t;
      }
      
      return{
        need,
        ans,
        copycnt,
        changecopycnt,
        contentcopy,
        changeneed,
        copy,
        cnt,
      }
    }
}
</script>

<style scoped>
.copy{
  width: 50%;
  font-size: large;
  border-radius: 20px;
  border-width: 0;
  background-color: rgb(14, 219, 238);
  margin: 0 auto;
  font-style: italic;
}
.copy:hover{
  cursor: pointer;
  box-shadow: 2px 2px 10px rgb(14, 219, 238);
  transition: 500ms;
}
</style>
  