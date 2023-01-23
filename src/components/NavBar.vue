<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <router-link class="navbar-brand navl" :to="{name: 'judge'}">CDMA_Tools</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link active  navl" aria-current="page" :to="{name: 'judge'}">判断正交</router-link>
        <router-link class="nav-link navl" :to="{name: 'get'}">获取数据</router-link>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default{
    name:"NavBar",
}
</script>

<style scoped>
.navl{
    font-style: italic;
    font-size: 20px;
}
</style>