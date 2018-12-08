<template>
    <div id="app" class="container">
        <b-navbar toggleable="md" type="dark" variant="dark">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">Online Library</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item href="#">AllBooks</b-nav-item>
                    <!--<b-nav-item href="#" disabled>Disabled</b-nav-item>-->
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">Login</b-nav-item>
                    <b-nav-item href="#">Register</b-nav-item>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <!--<b-navbar-nav class="ml-auto">-->

                    <!--<b-nav-form>-->
                        <!--<b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>-->
                        <!--<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
                    <!--</b-nav-form>-->

                <!--</b-navbar-nav>-->
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
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
