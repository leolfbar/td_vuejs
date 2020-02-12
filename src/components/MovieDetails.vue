<template>
  <div>
    
      <h1>{{selectedMovie.title}}</h1>
      <p><b>Date de sortie : </b>{{selectedMovie.date}}</p>
          <p><b>Réalisateur : </b>{{selectedMovie.director}}</p>
          <p><b>Synopsys : </b>{{selectedMovie.synopsys}}</p>

          <button>Editer</button>
  </div>
</template>

  <script>
    import { movies } from '../data.js'

  export default {
   data () {
    return {
      selectedMovie: movies[this.$route.params.id]
    }
  },
  // watch: {
  //   $route () {
  //     this.selectMovie()
  //   }
  // },
  // methods: {
  //   selectMovie () {
  //     this.selectedMovie = movies[this.$route.params.id]
  //   }
  // }
  }

  // <select v-model="searchBy">
  //     <option value="title">Titre</option>
  //     <option value="date">Date</option>
  //     <option value="director">Réalisateur</option>
  //   </select>
  //   <input v-model="searchWord">
  //   <button v-on:click="display">AFFICHRE</button>
  //   <button v-if="displayReboot" v-on:click="reboot">Réinitialiser</button>
  </script>


