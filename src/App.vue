<template>
    <div id="app">
        <b-navbar toggleable="md" type="dark" variant="dark">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand to="/">Online Library</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item to="/AllBooks">AllBooks</b-nav-item>
                    <b-nav-item to="/AllComments">AllComments</b-nav-item>
                    <!--<b-nav-item href="#" disabled>Disabled</b-nav-item>-->
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/Admin">Admin</b-nav-item>
                    <b-nav-item to="/Login" v-if="!is_login">Login/Register</b-nav-item>
                    <b-nav-item @click.stop="logout" v-if="is_login">Logout</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <!--<router-link to="/AllBooks">Books</router-link>-->
        <router-view style="margin-top:30px;"/>
    </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      is_login: localStorage.getItem('user')
    }
  },
  methods: {
    logout () {
      var auth2 = gapi.auth2.getAuthInstance()
      auth2.signOut().then(function () {
        console.log('User signed out.')
      })
      localStorage.clear()
      location.reload()
    }
  }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #000000;
    / / color: #2c3e50;
        padding-top: 20px;
        background: url("./asserts/homebackground.jpg");
    / / background-size: cover;
    / / background-color: #f6d54f;
        min-height: 100%;
        min-width: 100%;
        position: absolute;
        overflow-y: scroll;
    }

</style>
