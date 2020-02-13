<template>
  <div>
      <img :src="selectedMovie.url" alt="affiche du film">
      <h1>{{selectedMovie.title}}</h1>
      <p><b>Date de sortie : </b>{{selectedMovie.date}}</p>
          <p><b>Réalisateur : </b>{{selectedMovie.director}}</p>
          <p><b>Synopsys : </b>{{selectedMovie.synopsys}}</p>

        <router-link :to="{ name: 'edit_movie', params: {id: selectedMovie.id } }"><button>Editer</button></router-link>

  </div>
</template>

  <script>
    // import { movies } from '../data.js'

  export default {
   data () {
    return {
     shared_data: window.shared_data,
      selectedMovie: shared_data.movies[this.$route.params.id]
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


