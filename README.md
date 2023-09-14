# CMDA_TOOL:码分复用工具

## 概述

​	码分复用是实现多个用户同时使用同样频率进行通信的技术，本项目可以获取指定位数下的全部码片并对给定的码片进行正交判定

## 项目介绍

​	使用Vue编写的前端网页，用户可以一键获取并复制需要的码片

## 效果展示

- 获取正交

输入比特位数后会生成当前位数下的全部两两正交码

![](https://git.acwing.com/Cassifa/img-folder/-/raw/main/CMDA_TOOL/01.png)

- 判断正交

  - 常规页面

    判断模式下，左侧确认个数后用户需要在右侧填入待检测的码片

    ![](https://git.acwing.com/Cassifa/img-folder/-/raw/main/CMDA_TOOL/02.png)

  - 正交效果

  ![](https://git.acwing.com/Cassifa/img-folder/-/raw/main/CMDA_TOOL/0301.png)

  ![](https://git.acwing.com/Cassifa/img-folder/-/raw/main/CMDA_TOOL/0302.png)

  - 不正交效果

    数据不正交会为用户显示输入码片两两之间在什么情况下不正交

  ![](https://git.acwing.com/Cassifa/img-folder/-/raw/main/CMDA_TOOL/0401.png)

  ![](https://git.acwing.com/Cassifa/img-folder/-/raw/main/CMDA_TOOL/0402.png)
  
  - 非法输入
  
    同时会检测玩家输入合法性，拒绝数位不等的输入/含有非01的输入以及不完整的输入



## 构造正交数据代码

```js
      const changeneed=(content)=>{
        cnt.value=1;
        need.value=content;//获取输入
        ans.value.splice(0,ans.value.length);//清空答案数组
        let t=need.value;//当前构造位数
        let k=need.value;//需要的位数
        //逻辑：取当前长度为构造格，格内前一半构造1，后半构造0
        while(t){
            if(k&1)break;//输入数据必须为偶数
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
            if(t&1)break;//当前最小构造格必须为偶数
            t/=2;
        }
        copycnt.value=ans.value.length;//最大复制数量
      }
```

