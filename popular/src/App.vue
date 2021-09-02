<template>
  <div id="app">
    <Header />
    <CBox minH="700px" maxW="1140px" p="10" m="auto">
    <router-view />
    </CBox>
    <Footer />
  </div>
</template>

<script>
import { CBox } from "@chakra-ui/vue"

import Header from './components/organisms/Header'
import Footer from './components/organisms/Footer'

export default {
  components: {
    Header,
    Footer,
    CBox,
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
