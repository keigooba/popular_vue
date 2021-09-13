<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>お問い合わせ一覧</h1>
      </v-flex>
      <v-flex xs12 mt-10>
        <v-data-table :headers='headers' :items='contactList'>
        </v-data-table>
      </v-flex>
      <v-flex mt-12>
        <router-link :to="{ name: 'Contact' }">
          <v-btn color="teal" width="50%" height="40px">
            お問い合わせに戻る
          </v-btn>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  created () {
    this.contactList = this.$store.state.contactList
  },
  data () {
    return {
      headers: [
        { text: 'ID', value: 'id' },
        { text: '内容', value: 'content' },
        { text: 'OS', value: 'selectOS' },
        { text: 'ブラウザ', value: 'selectBrowser' },
        { text: 'ツイッターアカウント名', value: 'twitterName' },
      ],
      contactList: []
    }
  }
}
</script>

<style scoped>
button[type="button"] {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
