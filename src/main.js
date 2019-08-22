// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'


import VueRouter from 'vue-router'
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

import './common/stylus/index.styl'

Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

// let app = Vue.extend(App);

let router = new VueRouter({
	routes:[
		{path:'/',redirect:'/goods'},
		{path:'/goods',component:goods},
		{path:'/ratings',component:ratings},
		{path:'/seller',component:seller}
	],
	linkActiveClass:'active'
});


// Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
	data:{},
	methods:{},
	render:c => c(App),
	router
})
