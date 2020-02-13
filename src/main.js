import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({routes});

window.shared_data = {
  movies: [{
    id: 0,
    title: "La bataille de l'espace : l'offensive des duplicatas",
    date: 2002,
    director: "jsp",
    synopsys: "tgzdeiokfrgiuhyrfkodlorityuhgjrk,feldzspzéeoriutghvjn,dkclszeoritujghnfv,kd;l",
    url: "https://i.ytimg.com/vi/C_KSsKK49k8/maxresdefault.jpg",
    displayDetails: false,
  }, {
    id: 1,
    title: "Bary Motter et le détenu de Azbakan",
    date: 1960,
    director: "jsp",
    synopsys: "tgzdeiokfrgiuhyrfkodlorityuhgjrk,feldzspzéeoriutghvjn,dkclszeoritujghnfv,kd;l",
    url: "https://i.ytimg.com/vi/C_KSsKK49k8/maxresdefault.jpg",
    displayDetails: false,
  }, {
    id: 2,
    title: "L'empeureur des tiges ciculaires : le cartel du milieu",
    date: 2023,
    director: "jspgr",
    synopsys: "tgzdeiokfrgiuhyrfkodlorityuhgjrk,feldzspzéeoriutghvjn,dkclszeoritujghnfv,kd;l",
    url: "https://i.ytimg.com/vi/C_KSsKK49k8/maxresdefault.jpg",
    displayDetails: false,
  }, {
    id: 3,
    title: "L'empeureur des tiges ciculaires : le cartel du milieu",
    date: 2023,
    director: "jspgr",
    synopsys: "tgzdeiokfrgiuhyrfkodlorityuhgjrk,feldzspzéeoriutghvjn,dkclszeoritujghnfv,kd;l",
    url: "https://i.ytimg.com/vi/C_KSsKK49k8/maxresdefault.jpg",
    displayDetails: false,
  }]
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
