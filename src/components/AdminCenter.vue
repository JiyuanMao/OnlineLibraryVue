<template>
    <div class="container">
        <div class="row">
            <b-form-input class="offset-1 col-7" id="inputLive" v-model="query_str" type="text"
                          placeholder="Enter to filter books"></b-form-input>
            <b-button v-b-modal.modal variant="success" class="offset-1">Add a new book</b-button>
        </div>
        <br>
        <b-table style="width: 90%;margin: auto" striped hover :items="books" :fields="fields"
                 :filter="query_str" caption-top>
            <template slot="table-caption">
                Books
            </template>

            <template slot="operation" slot-scope="data">
                <b-button variant="info" size="sm" @click.stop="updateBook(data.item)" class="mr-2">
                    Modify
                </b-button>
                <b-button variant="danger" size="sm" @click.stop="deleteBooks(data.item.name,data.item._id)"
                          class="mr-2">
                    Delete
                </b-button>
            </template>

        </b-table>

        <!--add modal-->
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

        <!--update modal-->
        <b-modal v-model="show_updates" title="Edit book info" @ok="handleUpdateSubmit" centered>
            <form @submit.stop.prevent="handleUpdateSubmit">
                <b-row>
                    <b-col sm="2"><label>Name:</label></b-col>
                    <b-col sm="10">
                        <b-form-input type="text" placeholder="Enter name" v-model="update_book.name"></b-form-input>
                    </b-col>
                </b-row>
                <b-row style="margin-top: 30px;">
                    <b-col sm="2"><label>Author:</label></b-col>
                    <b-col sm="10">
                        <b-form-input type="text" placeholder="Enter author"
                                      v-model="update_book.author"></b-form-input>
                    </b-col>
                </b-row>
                <b-row style="margin-top: 30px;">
                    <b-col sm="2"><label>Publisher:</label></b-col>
                    <b-col sm="10">
                        <b-form-input type="text" placeholder="Enter publisher"
                                      v-model="update_book.publisher"></b-form-input>
                    </b-col>
                </b-row>
                <b-row style="margin-top: 30px;">
                    <b-col sm="2"><label>Category:</label></b-col>
                    <b-col sm="10">
                        <b-form-input type="text" placeholder="Enter category"
                                      v-model="update_book.category"></b-form-input>
                    </b-col>
                </b-row>
                <b-row style="margin-top: 30px;">
                    <b-col sm="2"><label>Likes:</label></b-col>
                    <b-col sm="10">
                        <b-form-input type="number" placeholder="Enter category"
                                      v-model="update_book.likes"></b-form-input>
                    </b-col>
                </b-row>
            </form>
        </b-modal>
    </div>
</template>
<style>
    template {
        background: url("../asserts/homebackground.jpg") no-repeat center top;
    }
</style>
<script>
import BookService from '@/services/bookservice'

export default {
  name: 'AdminCenter',
  data () {
    return {
      books: [],
      fields: [
        {
          key: 'name',
          sortable: true
        }, {
          key: 'author',
          sortable: true
        }, {
          key: 'publisher',
          sortable: true
        }, {
          key: 'category',
          sortable: true
        }, {
          key: 'likes',
          sortable: true
        }, 'operation'],
      show_books: [],
      book: {
        'name': '',
        'author': '',
        'publisher': '',
        'category': ''
      },
      update_book: {
        'id': '',
        'name': '',
        'author': '',
        'publisher': '',
        'category': '',
        'likes': ''
      },
      query_str: '',
      show_updates: false,
      is_login: localStorage.getItem('user')
    }
  },
  created () {
    let user = JSON.parse(localStorage.getItem('user'))
    if (user === null) {
      alert('Login first!')
      this.$router.push('/')
    }
    if (user.usertype !== 'admin') {
      alert('You are not admin!')
      this.$router.push('/')
    }
    this.getBooks()
  },
  methods: {
    handleSubmit () {
      console.log(this.book)
      BookService.addBook(this.book)
        .then(response => {
          console.log(response)
          alert(response.data.message)
          this.getBooks()
        })
    },
    updateBook (book) {
      this.update_book.id = book._id
      this.update_book.name = book.name
      this.update_book.author = book.author
      this.update_book.publisher = book.publisher
      this.update_book.category = book.category
      this.update_book.likes = book.likes
      console.log(book)
      this.show_updates = true
    },
    handleUpdateSubmit () {
      console.log(this.update_book)
      BookService.updateBook(this.update_book)
        .then(response => {
          console.log(response)
          alert(response.data.message)
          this.getBooks()
        })
    },
    getBooks: function () {
      BookService.getBooks()
        .then(response => {
          console.log(response)
          this.books = response.data
        })
    },
    deleteBooks: function (name, id) {
      let ret = confirm('Are you sure to delete ' + name)
      if (ret) {
        BookService.deleteBook(id)
          .then(response => {
            console.log(response)
            alert(response.data.message)
            this.getBooks()
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
