<template>
    <div class="offset-3 col-6">
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Login" active>
                    <b-form @submit="onLogin" @reset="onReset" v-if="show">
                        <b-form-group id="exampleInputGroup1"
                                      label="Username:"
                                      label-for="exampleInput1"
                                      description="The username used to login.">
                            <b-form-input id="exampleInput1"
                                          type="text"
                                          v-model="form.username"
                                          required
                                          placeholder="Enter username">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label="Your password"
                                      label-for="exampleInput2">
                            <b-form-input id="exampleInput2"
                                          type="password"
                                          v-model="form.password"
                                          required
                                          placeholder="Enter password">
                            </b-form-input>
                        </b-form-group>
                        <b-button type="submit" variant="success">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                </b-tab>
                <b-tab title="Register">
                    <b-form @submit="onRegister" @reset="onReset" v-if="show">
                        <b-form-group id="exampleInputGroup1"
                                      label="Username:"
                                      label-for="exampleInput1"
                                      description="The username used to login.">
                            <b-form-input id="exampleInput1"
                                          type="text"
                                          v-model="form.username"
                                          required
                                          placeholder="Enter username">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label="Your password"
                                      label-for="exampleInput2">
                            <b-form-input id="exampleInput2"
                                          type="password"
                                          v-model="form.password"
                                          required
                                          placeholder="Enter password">
                            </b-form-input>
                        </b-form-group>
                        <b-button type="submit" variant="primary">Register</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                </b-tab>
            </b-tabs>
        </b-card>

    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    onLogin (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.username = ''
      this.form.password = ''
      this.$nextTick(() => {
        this.show = true
      })
    },
    onRegister (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<style scoped>

</style>
