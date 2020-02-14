import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({routes});

window.shared_data = {
  movies: [{
    id: 0,
    title: "Harry Potter à l'école des sorciers",
    date: 2001,
    language: "français",
    director: {
      name: "Chris Columbus",
      nationality: "Américaine",
      birthdate: "10 septembre 1958"
    },
    style: "Fantastique",
    url: "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    displayDetails: false,
  }, {
    id: 1,
    title: "Harry Potter et la chambre des secrets",
    date: 2002,
    language: "français",
    director: {
      name: "Chris Columbus",
      nationality: "Américain",
      birthdate: "10 septembre 1958"
    },
    style: "Fantastique",
    url: "https://m.media-amazon.com/images/M/MV5BNWYyNTBkMWYtZTlmZS00NmE4LTg3M2EtMTRhNDJmOWQ2NDc3XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
    displayDetails: false,
  }, {
    id: 2,
    title: "Harry Potter et le prisonnier d'Azkaban",
    date: 2004,
    language: "français",
    director: {
      name: "Alfonso Cuarón",
      nationality: "Mexicain",
      birthdate: "28 novembre 1961"
    },
    style: "Fantastique",
    url: "https://m.media-amazon.com/images/M/MV5BMTlhZGY1YjYtZGRiYi00NjM2LWFkMDktOGY3YzM2MzM0NjVlXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,712,1000_AL_.jpg",
    displayDetails: false,
  }, {
    id: 3,
    title: "Harry Potter et la coupe de feu",
    date: 2005,
    language: "français",
    director: {
      name: "Mike Newell",
      nationality: "Britannique",
      birthdate: " 28 mars 1942"
    },
    style: "Fantastique",
    url: "https://m.media-amazon.com/images/M/MV5BZWYxYmFlMjYtZDFkYi00NDZiLWE4ZDItNTU3NzliZWJmYTliXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg",
    displayDetails: false,
  }, {
    id: 4,
    title: "Harry Potter et l'ordre du Phénix",
    date: 2007,
    language: "français",
    director: {
      name: "David Yates",
      nationality: "Britannique",
      birthdate: "8 octobre 1963"
    },
    style: "Fantastique",
    url: "https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_.jpg",
    displayDetails: false,
  }, {
    id: 5,
    title: "Harry Potter et le prince de sang-mêlé",
    date: 2009,
    language: "français",
    director: {
      name: "David Yates",
      nationality: "Britannique",
      birthdate: "8 octobre 1963"
    },
    style: "Fantastique",
    url: "https://m.media-amazon.com/images/M/MV5BMTI2ZGZhYmYtMWIxNy00MjBkLTg3YzktYTg0MjQ1ODA5ZGFmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,709,1000_AL_.jpg",
    displayDetails: false,
  }, {
    id: 6,
    title: "Harry Potter et les reliques de la mort: Partie 1",
    date: 2010,
    language: "français",
    director: {
      name: "David Yates",
      nationality: "Britannique",
      birthdate: "8 octobre 1963"
    },
    style: "Fantastique",
    url: "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    displayDetails: false,
  }, {
    id: 7,
    title: "Harry Potter et les reliques de la mort: Partie 2",
    date: 2011,
    language: "français",
    director: {
      name: "David Yates",
      nationality: "Britannique",
      birthdate: "8 octobre 1963"
    },
    style: "Fantastique",
    url: "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX667_CR0,0,667,999_AL_.jpg",
    displayDetails: false,
  }]
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
