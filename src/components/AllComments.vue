<template>
    <div class="container">
        <div class="row">
            <b-form-group horizontal label="Filter:" class="col-9" style="margin: auto">
                <b-input-group>
                    <b-form-input v-model="query_str" placeholder="Type to Search"/>
                    <b-input-group-append>
                        <b-btn :disabled="!query_str" @click="query_str = ''">Clear</b-btn>
                    </b-input-group-append>
                </b-input-group>
            </b-form-group>
        </div>
        <b-table style="width: 90%;margin: auto" striped hover :items="comments" :fields="fields"
                 :filter="query_str" caption-top>
            <template slot="table-caption">
                Your Comments
            </template>

            <template slot="operation" slot-scope="data">
                <b-button variant="info" size="sm" @click.stop="updateComment(data.item)" class="mr-2">
                    Modify
                </b-button>
                <b-button variant="danger" size="sm" @click.stop="deleteComment(data.item)"
                          class="mr-2">
                    Delete
                </b-button>
            </template>

        </b-table>
        <div v-if="comments.length <=0">
            You have nothing comments yet!
        </div>
    </div>
</template>
<script>
import CommentService from '@/services/commentservice'

export default {
  name: 'AllComments',
  data () {
    return {
      comments: [],
      fields: [
        {
          key: 'bookname',
          sortable: true
        }, {
          key: 'username',
          sortable: true
        }, {
          key: 'text',
          sortable: true
        }, 'operation'],
      query_str: '',
      is_login: localStorage.getItem('user'),
      user: {}
    }
  },
  created () {
    this.user = JSON.parse(localStorage.getItem('user'))
    if (this.user === null) {
      alert('Login first!')
      this.$router.push('/Login')
    }
    this.getComments()
  },
  methods: {
    getComments: function () {
      let user = JSON.parse(localStorage.getItem('user'))
      CommentService.getByUserName(user.username)
        .then(response => {
          this.comments = response.data
        })
    },
    updateComment (comment) {
      let text = prompt('Modify your comment text', comment.text)
      if (text.length <= 0) {
        alert('The comment is invalid!')
        return
      }
      comment.text = text
      CommentService.updateComment(comment).then(response => {
        alert('Update Successfully!')
      })
    },
    deleteComment (comment) {
      let ret = confirm('Are you sure to delete it?')
      if (ret) {
        CommentService.deleteComment(comment)
          .then(response => {
            console.log(response)
            alert(response.data.message)
            this.getComments()
          })
      }
    }
  }
}
</script>
