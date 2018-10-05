<template>
    <b-table striped hover :items="items" :fields="fields">
        <template slot="address" slot-scope="data">
            {{data.value.geo.lat}} : {{data.value.geo.lng}}
        </template>
        <template slot="rm" slot-scope="data">
            <b-button size="sm" type="button" variant="danger" @click="remove(data.index)">Удалить</b-button>
        </template>
    </b-table>
</template>

<script>
  export default {
    name: 'itemsList',
    data() {
      return {
        fields: [
          {
            key: 'phone',
            label: 'id'
          }, {
            key: 'username',
            label: 'login',
            sortable: true
          }, {
            key:  'address',
            label: 'Тест'
          }, {
            key: 'website',
            label: 'url',
            sortable: true
          }, {
            key: 'rm',
            label: 'Удалить'
          }
        ]
      }
    },
    props: {
      items: Array
    },
    methods: {
      remove(idx){
        this.$store.dispatch('removeItem', idx)
      }
    },
    mounted() {
      this.$store.dispatch('loadItems');
    }
  }
</script>