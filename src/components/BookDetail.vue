<template>
    <div>
        <b-card no-body style="width: 60%;margin: auto">
            <h4 slot="header">Book Name: {{book.name}}
                <small>(Author: {{book.author}})</small>
            </h4>
            <b-card-body>
                <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </b-card-body>
            <b-list-group flush>
                <b-list-group-item>Cras justo odio</b-list-group-item>
                <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>
            <b-card-body>
                <a href="#"
                   class="card-link">Card link</a>
                <a href="#"
                   class="card-link">Another link</a>
            </b-card-body>
            <b-card-footer>This is a footer</b-card-footer>
            <b-card-img src="https://placekitten.com/480/210"
                        alt="Image"
                        bottom></b-card-img>
        </b-card>
    </div>
</template>

<script>
import BookService from '@/services/BookService'
import CommentService from '@/services/CommentService'

export default {
  name: 'BookDetail',
  data () {
    return {
      book: {},
      comments: []
    }
  },
  created () {
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
    }
  }

}
</script>

<style scoped>

</style>
