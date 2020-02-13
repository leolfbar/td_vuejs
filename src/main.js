import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';

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
    url: "",
    displayDetails: false,
  }, {
    id: 1,
    title: "Bary Motter et le détenu de Azbakan",
    date: 1960,
    director: "jsp",
    synopsys: "tgzdeiokfrgiuhyrfkodlorityuhgjrk,feldzspzéeoriutghvjn,dkclszeoritujghnfv,kd;l",
    url: "",
    displayDetails: false,
  }, {
    id: 2,
    title: "L'empeureur des tiges ciculaires : le cartel du milieu",
    date: 2023,
    director: "jspgr",
    synopsys: "tgzdeiokfrgiuhyrfkodlorityuhgjrk,feldzspzéeoriutghvjn,dkclszeoritujghnfv,kd;l",
    url: "",
    displayDetails: false,
  }]
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
