<template>
    <b-jumbotron header="My Online Library" lead="There are lots of books now." class="container">
        <p>For more information visit website</p>
        <router-link to="/AllBooks">
            <b-btn name="homeBtn" variant="primary" href="/AllBooks">Start your travel</b-btn>
        </router-link>
    </b-jumbotron>
</template>

<style>
    #app {
        position: absolute;
        overflow-y: scroll;
    }
</style>
