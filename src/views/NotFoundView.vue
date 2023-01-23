<template>
    <ContentCard>
      <div class="not404">
        404 NotFound!
      </div>
    </ContentCard>
  </template>
  
  <script>
import ContentCard from  '../components/ContentCard'

export default {
    name: 'NotFoundView',
      components: {
        ContentCard,
      }
}
</script>

<style scoped>
.not404{
  font-size: 5rem;
  height: 50%;
  text-align: center;
  text-shadow: 2px 2px 4px black;
}
</style>
  