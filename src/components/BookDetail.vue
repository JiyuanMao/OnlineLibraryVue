<template>
    <div>
        <b-card no-body style="width: 60%;margin: auto">
            <h4 slot="header">Book Name: {{book.name}}
                <small>(Author: {{book.author}})</small>
            </h4>
            <b-card-body>
                <p class="card-text">
                    Publisher: {{book.publisher}}
                </p>
                <p class="card-text">
                    Category: {{book.category}}
                </p>
            </b-card-body>
            <b-card-body>
                <p>Likes :{{book.likes}}</p>
                <b-button variant='outline-default' @click.stop="doLike" class="card-link">I like it.</b-button>
                <a :href="book.link"
                   class="card-link">Book link</a>
            </b-card-body>
            <b-card-footer>Comments:</b-card-footer>
            <b-list-group flush>
                <b-list-group-item v-for="comment in comments" :key="comment.text">
                    {{comment.username}} says: {{comment.text}}
                </b-list-group-item>
            </b-list-group>
            <b-button style="float: right" @click.stop="doComments()"> I want comment.</b-button>
        </b-card>
        <br>
        <br>
    </div>
</template>

<script>
import BookService from '@/services/bookservice'
import CommentService from '@/services/commentservice'

export default {
  name: 'BookDetail',
  data () {
    return {
      book: {},
      comments: [],
      is_login: localStorage.getItem('user')
    }
  },
  created () {
    if (localStorage.getItem('user') === null) {
      alert('login first!')
      this.$router.push('/Login')
    }
    console.log(this.$route.params.id)
    this.getBookDetail(this.$route.params.name)
    this.getBookComments(this.$route.params.name)
  },
  methods: {
    getBookDetail (bookname) {
      BookService.getBookInfo(bookname)
        .then(response => {
          this.book = response.data[0]
        })
    },
    getBookComments (bookname) {
      CommentService.getComments(bookname)
        .then(response => {
          this.comments = response.data
        })
    },
    doComments () {
      let comment = {}
      comment.text = prompt('Input your comment:')
      if (comment.text.length === 0) {
        alert('Nothing input!')
        return
      }
      comment.username = JSON.parse(localStorage.getItem('user')).username
      comment.bookname = this.book.name
      let that = this
      CommentService.newComment(comment).then(response => {
        alert('Add comments success!')
        that.getBookComments(comment.bookname)
      })
    },
    doLike () {
      this.book.likes++
      this.book.id = this.book._id
      BookService.updateBook(this.book)
        .then(response => {
        })
    }
  }

}
</script>

<style scoped>

</style>
