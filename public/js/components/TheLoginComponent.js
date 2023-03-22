export default {
    name: "TheLoginComponent",

    template: `
    <section class="container">
    <div class="jumbotron">
        <h1>Welcome to Flashblack!</h1>
        <p class="lead">
        Before revisiting your favourite movies, tv shows or music from yesteryear, please log in with a valid username and password.
        </p>
    </div>

    <section class="log-in">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input ref="username" v-model="username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>

      <label class="sr-only" for="inlineFormPassword">Name</label>
      <input ref="password" v-model="password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
    </section>

    <button
        @click="tryLogIn"
        type="submit" 
        class="btn btn-primary login-submit"
    >Go!
    </button>
  // eddit css for the signup button
    <button v-if="signup"
        @click="tryLogIn"
        type="submit" 
        class="btn btn-primary login-submit signup-submit"
    >Sign Up for Roku!
    </button>
  </section>`,
  data() {
    return {
      username: '', 
      password: '',
      signup: false
    }
  },

  methods: { 
    trySignUp() {
     debugger;
    },
    tryLogIn() {
      // debugger;
      // sanitize or inputs, make sure they're not empty etc "username"
      // trim will be delete all the white space before and after the string
      if (this.username.trim().length == 0) { 
        console.log('username input is empty'); 
        this.$refs['username'].classList.add('field-error');
        return; // exits the login function 
      }
      if (this.password.trim().length == 0) { 
        console.log('password input is empty'); 
        this.$refs['password'].classList.add('field-error'); 
        return; // exits the login function 
       }

       // end input validation
      this.$refs['username'].classList.remove('field-error');
      this.$refs['password'].classList.remove('field-error');

      let userData = {
        username: this.username,
        password: this.password
      }

      fetch('/ums/login', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json()) 
        .then(data => { 
          console.log(data);
          // check for no user and then present a sign up control of some kind
          if (data.message == "no user") {
          // turn the signup button on in the tamplate, set some kind of data to control apperance in the UI,
          // You can add a new route to poast a user to the database => sign up for Roku  
          this.$refs['username'].previous
          this.signup = true;
          }
          // checck for a broken password
          // if it's broken, mark it and tel lthe user to try again

        if  (data.message == "wrong password") {
          this.$refs['password'].classList.add('field-error');

          // change the label to reflect the error
          // animate somthing to tell the user there's a problem
          // record some profanity and play it now. really loud!

          // if there's a user in the data object, it means the login was successful
          // if the user has been validated on the server side, so we are good to go
        }

        // if (data.user) {
        //   // store the user in local storage
        //   window.localStorage.set('user', JSON.stringify(data.user));
        //   this.$router.push({ name: "allusers"});
        // }
        
    })
    .catch(error => console.error(error));
  }
}

}