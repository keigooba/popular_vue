<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>popularに関するお問い合わせ</h1>
        <p>
          感想・不具合・改善点などお聞かせください<br>
          popular(<a href="https://popular-32pe64nwja-an.a.run.app">https://popular-32pe64nwja-an.a.run.app</a>)
        </p>
        <v-btn @click="$router.push({name: 'contactList' })" width="70%" color="#6C757D">お問い合わせ一覧</v-btn>
        <p class="small">公開(2021/06/22)から3ヶ月間のみ表示</p>
      </v-flex>
      <v-flex xs8 mt-4 class="form">
        <v-form>
          <v-textarea v-model="contact.content" label="内容" outlined item-color="black"></v-textarea>
          <v-select v-model="contact.selectOS" :items="OS" label="お使いのOS（不具合・改善点の場合）" outlined class="selected"></v-select>
          <div v-show="contact.selectOS === 'その他'">
            <v-text-field v-model="other.OS" label="その他のOS"></v-text-field>
          </div>
          <v-select v-model="contact.selectBrowser" :items="Browser" label="お使いのブラウザ（不具合・改善点の場合）" outlined class="selected"></v-select>
          <div v-show="contact.selectBrowser === 'その他'">
            <v-text-field v-model="other.Browser" label="その他のブラウザ"></v-text-field>
          </div>
          <v-text-field v-model="contact.twitterName" label="返信が必要な場合のツイッターアカウント名" outlined></v-text-field>
          <div>
            <v-btn @click="submit" width="100%" color="#9d00ff">送信</v-btn>
          </div>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    contact: {},
    other: {},
    OS: ["iPhone", "Android", "Mac", "Windows", "その他"],
    Browser: ["Safari","Chrome","Twitterのブラウザ","Firefox","その他"],
  }),
  methods: {
    submit() {
      if(this.contact.selectOS === 'その他') {
        this.contact.selectOS = this.other.OS
      }
      if(this.contact.selectBrowser === 'その他') {
        this.contact.selectBrowser = this.other.Browser
      }
      this.addContact(this.contact)
      this.$router.push({ name: 'contactList' })
      this.contact = {}
      this.other = {}
    },
    ...mapActions(['addContact'])
  }
}
</script>

<style scoped>
a {
  color: #9d00ff !important;
}
p {
  margin: 0.5rem 0;
}
.small {
  font-size: 0.8rem;
}
.form {
  margin: 1rem auto;
}
button[type="button"] {
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}
.v-list {
  text-align: left;
}
</style>
