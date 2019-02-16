'use strict';

let router ;
let app ;
let wd = new WikiData() ;


$(document).ready ( function () {
	vue_components.toolname = 'picturethis' ;
	Promise.all ( [
		vue_components.loadComponents ( ['wd-link','widar','tool-translate','tool-navbar','main.html'] ) ,
//		new Promise(function(resolve, reject) { resolve() } )
	] )	.then ( () => {
			wd_link_wd = wd ;
			const routes = [
			  { path: '/', component: MainPage , props:true },
			  { path: '/:query', component: MainPage , props:true },
			] ;
			router = new VueRouter({routes}) ;
			app = new Vue ( { router } ) .$mount('#app') ;
		} ) ;
} ) ;
