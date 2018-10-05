<template>
    <b-row>
        <b-form @submit.prevent="addPerson">
            <b-form-group :label="key" v-for="(val, key, index) in personData" :key="'__key__'+index">
                <b-row v-if="key === 'address'">
                    <b-col><b-form-input type="text" v-model="personData[key].geo.lat"/></b-col>
                    <b-col><b-form-input type="text" v-model="personData[key].geo.lng"/></b-col>
                </b-row>
                <b-form-input v-else type="text" v-model="personData[key]"/>
            </b-form-group>
            <b-button type="submit" size="sm" variant="primary">
                Добавить
            </b-button>
        </b-form>
    </b-row>
</template>

<script>
  export default {
    name: 'addItem',
    data() {
      return {
        personData:   {
          username: "",
          address: {
            geo: {
              lat: "",
              lng: ""
            }
          },
          phone: "",
          website: "default.org"
        }
      }
    },
    methods: {
      addPerson(e){

        const newItem = {
          username: this.personData.username,
          address: {
            geo: {
              lat: this.personData.address.geo.lat,
              lng: this.personData.address.geo.lng
            }
          },
          phone: this.personData.phone,
          website: this.personData.website
        };
        this.$store.dispatch('addItem', newItem);
      }
    },
    props: {
      fields: Object
    },
  }
</script>