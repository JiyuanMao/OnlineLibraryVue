<template>
    <div class="container">
        <div>
            <b-button v-b-modal.modal variant="success" class="offset-10">Add a new book</b-button>
        </div>
        <br>
        <b-table style="width: 90%;margin: auto" striped hover :items="books" :fields="fields"></b-table>
        <b-modal id="modal" title="Add a new book" @ok="handleSubmit" centered>
            <form @submit.stop.prevent="handleSubmit">
                <b-row>
                    <b-col sm="2"><label>Name:</label></b-col>
                    <b-col sm="10">
                        <b-form-input type="text" placeholder="Enter name" v-model="book.name"></b-form-input>
                    </b-col>
                </b-row>
                <b-row style="margin-top: 30px;">
                    <b-col sm="2"><label>Author:</label></b-col>
                    <b-col sm="10">
                        <b-form-input type="text" placeholder="Enter author" v-model="book.author"></b-form-input>
                    </b-col>
                </b-row>
                <b-row style="margin-top: 30px;">
                    <b-col sm="2"><label>Publisher:</label></b-col>
                    <b-col sm="10">
                        <b-form-input type="text" placeholder="Enter publisher" v-model="book.publisher"></b-form-input>
                    </b-col>
                </b-row>
                <b-row style="margin-top: 30px;">
                    <b-col sm="2"><label>Category:</label></b-col>
                    <b-col sm="10">
                        <b-form-input type="text" placeholder="Enter category" v-model="book.category"></b-form-input>
                    </b-col>
                </b-row>
            </form>
        </b-modal>
    </div>
</template>

<script>
import BookService from '@/services/BookService'

export default {
  name: 'AdminCenter',
  data () {
    return {
      books: [],
      fields: ['name', 'author', 'publisher', 'category', 'likes', 'Operation'],
      book: {
        'name': '',
        'author': '',
        'publisher': '',
        'category': ''
      }
    }
  },
  created () {
    console.log('aaaaaaaaa')
    this.getBooks()
  },
  methods: {
    handleSubmit () {
      console.log(this.book)
      BookService.addBook(this.book)
        .then(response => {
          alert(response.message)
          this.getBooks()
        })
      //     .error(ret => {
      //         // alert("G")
      //     })
    },
    getBooks: function () {
      BookService.getBooks()
        .then(response => {
          console.log(response)
          this.books = response.data
        })
    }
  }
}
</script>

<style scoped>

</style>
