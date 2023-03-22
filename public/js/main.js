// import modules/comps here
import LoginPage from './components/TheLoginComponent.js';
import AllUsersPage from './components/TheAllUsersComponent.js';
import DefaultHome from  './components/TheDefaultHomeComponent.js';
import KidsHome from './components/TheKidsHomeComponent.js';

// import ErrorPage from './modules/ErrorPage.js';
const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes: [ // vue will try to matche the following routes
        //       // and render the appropriate component onto the page
        {  path: '/', // the location bar url
           name: 'login', // the name of the route
           component: LoginPage // the component to render
        },


        {  
            path: '/users', // the location bar url
            name: 'allusers', // the name of the route
            component: AllUsersPage // the component to render
         },

        {  
            path: '/home', // the location bar url
            name: 'defaulthome', // the name of the route
            component: DefaultHome // the component to render
         },

         {  
            path: '/kidshome', // the location bar url
            name: 'kidshome', // the name of the route
            component: KidsHome // the component to render
         },

    ] // short for `routes: routes`
  })
  
  // 5. Create and mount the root instance.
  const app = Vue.createApp({
      data() {
         return {
            authenticated: false,
         }
      },

      // created(){
      //    if (window.localStorage.getItem('user')){
      //       this.$router.push({name: 'allusers'});
      //    }
      // }
  })
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  app.use(router);

  app.mount('#app');
  
  // Now the app has started!
