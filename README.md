# CMDA_TOOL:码分复用工具

## 概述

​	码分复用是实现多个用户同时使用同样频率进行通信的技术，本项目可以获取指定位数下的全部码片并对给定的码片进行正交判定

## 项目介绍

​	使用Vue编写的前端网页，用户可以一件获取并复制需要的码片

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
  
