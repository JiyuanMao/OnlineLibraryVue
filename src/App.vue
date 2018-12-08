<template>
    <div id="app">
        <b-navbar toggleable="md" type="dark" variant="dark">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand to="/">Online Library</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item to="/AllBooks">AllBooks</b-nav-item>
                    <!--<b-nav-item href="#" disabled>Disabled</b-nav-item>-->
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/Admin">Admin</b-nav-item>
                    <b-nav-item to="/Login">Login</b-nav-item>
                    <b-nav-item href="#">Register</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <!--<router-link to="/AllBooks">Books</router-link>-->
        <router-view style="margin-top:30px;"/>
    </div>
</template>

<script>
export default {
  name: 'App'
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
        background: url("./asserts/pagebackground.jpg") no-repeat center top;
    / / background-size: cover;
    / / background-color: #f6d54f;
        min-height: 100%;
        min-width: 100%;
        position: fixed;
    }

</style>
