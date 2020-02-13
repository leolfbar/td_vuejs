<template>
  <div>
    <img :src="selectedMovie.url" alt="affiche du film">
      <h1>{{selectedMovie.title}}</h1>
      <p><b>Date de sortie : </b>{{selectedMovie.date}}</p>
          <p><b>Réalisateur : </b>{{selectedMovie.director}}</p>
          <p><b>Synopsys : </b>{{selectedMovie.synopsys}}</p>


          <p><b>Titre :</b></p>
          <input
  v-bind:value="shared_data.movies[id].title"
  v-on:input="shared_data.movies[id].title = $event.target.value"
>
<br>

<p><b>Date de sortie</b></p>
          <input
  v-bind:value="shared_data.movies[id].date"
  v-on:input="shared_data.movies[id].date = $event.target.value"
>
<br>

<p><b>Director</b></p>
          <input
  v-bind:value="shared_data.movies[id].director"
  v-on:input="shared_data.movies[id].director = $event.target.value"
>
<br>

<p><b>Synopsys</b></p>
          <input
  v-bind:value="shared_data.movies[id].synopsys"
  v-on:input="shared_data.movies[id].synopsys = $event.target.value"
>
<br>

<p><b>URL de l'image</b></p>
          <input
  v-bind:value="shared_data.movies[id].url"
  v-on:input="shared_data.movies[id].url = $event.target.value"
>
<br>

          <!-- <button>Editer</button> -->
  </div>
</template>

  <script>
    // import { movies } from '../data.js'

  export default {
   data () {
    return {
     shared_data: window.shared_data,
      selectedMovie: shared_data.movies[this.$route.params.id],
      id: this.$route.params.id
    }
  },

  methods: {
      persistTitle(event) {
          shared_data.movies[id].title = $event.target.value
        //   this.movies = this.moviesBase;
        //   this.displayReboot = false;
        }
  }
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


