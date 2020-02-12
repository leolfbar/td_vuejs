<template>
  <div>
    <select v-model="searchBy">
      <option value="title">Titre</option>
      <option value="date">Date</option>
      <option value="director">Réalisateur</option>
    </select>
    <input v-model="searchWord">
    <button v-on:click="search">Recherche</button>
    <button v-if="displayReboot" v-on:click="reboot">Réinitialiser</button>
    <ul>
      <li v-for="(m,i) in movies" v-bind:key="m.title">({{i}})
      <!-- <router-link To:"/edit">  -->
      
        <!-- <p v-on:click="showDetails(i)"><b>Titre : </b>{{m.title}}</p> -->
        
         
        <router-link :to="{ name: 'movie_details', params: {id: m.id } }"><p ><b>Titre : </b>{{m.title}}</p></router-link>
        <!-- <div v-if="m.displayDetails">
          <p><b>Date de sortie : </b>{{m.date}}</p>
          <p><b>Réalisateur : </b>{{m.director}}</p>
          <p><b>Synopsys : </b>{{m.synopsys}}</p>
        </div> -->
      </li>
    </ul>
    <p>Nombre de films : {{movies.length}}</p>
  </div>
</template>

  <script>
  import { movies } from '../data.js'
  export default {

  data() {
    return {

        movies: movies,
        moviesBase : '',
        searchWord : '',
        displayReboot : false,
        searchBy: 'title',
        sortTitle: '',
        sortDate: '',
        sortDirector: '',
        sortSynopsys: '',
        IdRemoveMovie: 0
    }
  },
      methods: {
         showDetails(index) {
           this.movies[index].displayDetails = !this.movies[index].displayDetails;
         },
        search() {
          if (this.searchBy == "title") {
            this.moviesBase = this.movies;
            this.movies = this.movies.filter(m => m.title == this.searchWord);
            this.displayReboot = true;
          } else if (this.searchBy == "date") {
            this.moviesBase = this.movies;
            this.movies = this.movies.filter(m => m.date == this.searchWord);
            this.displayReboot = true;

          } else if (this.searchBy == "director") {
            this.moviesBase = this.movies;
            this.movies = this.movies.filter(m => m.director == this.searchWord);
            this.displayReboot = true;
          }
        },
        reboot() {
          this.movies = this.moviesBase;
          this.displayReboot = false;
        }
      }
    }
  </script>
