<template>
  <main id="app">
    <div class="container">
      <items-list :items="this.$store.getters.getItems"/>
      <b-row>
        <b-col cols="6">
          <add-item/>
        </b-col>
      </b-row>
    </div>
  </main>
</template>

<script>
import  itemsList from './components/itemsList.vue'
import  addItem from './components/addItem.vue'

export default {
  name: 'app',
  components: {
    itemsList, addItem
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
