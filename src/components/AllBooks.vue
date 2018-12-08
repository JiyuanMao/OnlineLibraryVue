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
        <b-table style="width: 90%;margin: auto" striped hover :items="books" :fields="fields"
                 :filter="query_str" caption-top>
            <template slot="table-caption">
                Books
            </template>

            <template slot="operation" slot-scope="data">

                <b-button variant="info" size="sm" class="mr-2" :to="'/Detail/'+data.item.name">
                    See Detail
                </b-button>

            </template>

        </b-table>
    </div>
</template>
<script>
import BookService from '@/services/BookService'

export default {
  name: 'AllBooks',
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
      query_str: ''
    }
  },
  created () {
    this.getBooks()
  },
  methods: {
    getBooks: function () {
      BookService.getBooks()
        .then(response => {
          this.books = response.data
        })
    }
  }
}
</script>
