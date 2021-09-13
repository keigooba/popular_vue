<template>
  <v-app id="app">
    <Header />
    <CBox minH="700px" maxW="1140px" p="10" m="auto">
    <router-view />
    </CBox>
    <Footer />
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import { CBox } from "@chakra-ui/vue"

import Header from './components/organisms/Header'
import Footer from './components/organisms/Footer'

export default {
  components: {
    Header,
    Footer,
    CBox,
  },
  created() {
    this.fetchContactList()
  },
  methods: {
    ...mapActions(['fetchContactList'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
