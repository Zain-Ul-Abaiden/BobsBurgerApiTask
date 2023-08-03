<template>
  <div>
  <ul>
    <li v-for="(u,id) in user" :key="id">
      <div class="px-4 py-4 flex">
        <img class="rounded-full h-20 w-20" :src="u.image" :alt="u.name + 'Images'" />
        <div class="ml-10">
          <p class="text-gray-800"> User Id: {{ u.id }}</p>
          <p class="text-gray-800">User Name: {{ u.name }}</p>
          <p class="text-gray-400">User Gender: {{ u.gender }}</p>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
  name: 'HelloWorld',  

  computed:{
    ...mapGetters({user: 'getUser'})
  },

  methods:{
    ...mapActions({createUser:'registerUser'})
  }, 

  created() {
    this.createUser();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
