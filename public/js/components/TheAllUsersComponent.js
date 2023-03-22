import UserComponent from "./TheUserComponent.js";



export default {
    name: "TheAllUsersComponent",


   template: `
    <section class="users-container">
       <h2> Who's using roku? </h2>

      <user v-for="user in users" :user="user" ></user>
    </section>
   `,


   created() {
    console.log('all users is ready');
    fetch('/ums/users')
      .then(res => res.json())
      .then(data => {
         console.table(data);
         // push the users into the vm's data object
         this.users = data;
      })
   .catch(err => console.error(error));
   },

   data() {
      return{
         users:[]
      }
   },

   components: {
      user: UserComponent
   }
}