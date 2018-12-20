<template>
    <div class="offset-3 col-6">
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Login" active>
                    <b-form @submit="onLogin" @reset="onReset" v-if="show">
                        <b-form-group label="Username:" description="The username used to login.">
                            <b-form-input type="text"
                                          v-model="form.username"
                                          required
                                          placeholder="Enter username">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group label="Your password">
                            <b-form-input type="password"
                                          v-model="form.password"
                                          required
                                          placeholder="Enter password">
                            </b-form-input>
                        </b-form-group>
                        <div id="google-signin-button" class="g-signin2" data-theme="dark"></div>
                        <b-button type="submit" variant="success">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                </b-tab>
                <b-tab title="Register">
                    <b-form @submit="onRegister" @reset="onReset" v-if="show">
                        <b-form-group label="Username:" description="The username used to login.">
                            <b-form-input
                                    type="text"
                                    v-model="form.username"
                                    required
                                    placeholder="Enter username">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group label="Your password">
                            <b-form-input type="password"
                                          v-model="form.password"
                                          required
                                          placeholder="Enter password">
                            </b-form-input>
                        </b-form-group>
                        <b-button name="registerBtn" type="submit" variant="primary">Register</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                </b-tab>
            </b-tabs>
        </b-card>

    </div>
</template>

<script>
    import UserService from '@/services/UserService'

    export default {
        name: 'Login',
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                },
                show: true,
                is_login: localStorage.getItem('user')
            }
        },
        methods: {
            onLogin(evt) {
                evt.preventDefault()
                UserService.userLogin(this.form)
                    .then(response => {
                        console.log(response)
                        localStorage.setItem('user', JSON.stringify(response.data[0]))
                        alert('Login Success!')
                        location.reload()
                        this.$router.push('/AllBooks')
                    })
            },
            onReset(evt) {
                evt.preventDefault()
                /* Reset our form values */
                this.form.username = ''
                this.form.password = ''
                this.$nextTick(() => {
                    this.show = true
                })
            },
            onRegister(evt) {
                evt.preventDefault()
                UserService.userRegister(this.form)
                    .then(response => {
                        alert(response.data.message + ', you can login now.')
                    })
            },
            onSignIn(googleUser) {
                // Useful data for your client-side scripts:
                var profile = googleUser.getBasicProfile();
                console.log("ID: " + profile.getId()); // Don't send this directly to your server!
                console.log('Full Name: ' + profile.getName());
                console.log('Given Name: ' + profile.getGivenName());
                console.log('Family Name: ' + profile.getFamilyName());
                console.log("Image URL: " + profile.getImageUrl());
                console.log("Email: " + profile.getEmail());

                // The ID token you need to pass to your backend:
                let id_token = googleUser.getAuthResponse().id_token;
                console.log("ID Token: " + id_token);
                let user = {
                    username: profile.getGivenName(),
                    password: "",
                    usertype: "user"
                };
                localStorage.setItem("user", JSON.stringify(user));
                alert('Login Success!');
                location.reload();
                this.$router.push('/AllBooks');
            }
        }, mounted() {
            let that = this;
            setTimeout(function () {
                gapi.signin2.render('google-signin-button', {
                    longtitle: true,
                    onsuccess: that.onSignIn
                });
                console.log("aaa");
            }, 500)
        }
    }
</script>

<style scoped>

</style>
