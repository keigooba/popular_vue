<template>
  <CBox bg="#9d00ff" color="white">
    <CFlex
      as="nav"
      justify="spance-between"
      fontWeight="bold"
      fontSize="2rem"
      maxW="1140px"
      mx="auto"
      :p="['1', '2']"
    >
      <CFlex fontWeight="900">
        <CLink as="router-link" to="/" color="white !important" onfocus="this.blur();" style="">
          <i class="far fa-image"></i>
          popular
        </CLink>
      </CFlex>
      <CFlex ml="auto">
        <CLink as="router-link" to="/home" color="white !important" onfocus="this.blur();">
        <i class="fab fa-twitter-square"></i>
        ログイン
        </CLink>
      </CFlex>
    </CFlex>
  </CBox>
</template>

<style scoped>
.fa-image, .fa-twitter-square {
  margin-top: 7px;
}
</style>

<script>
import {
  CBox,
  CFlex,
  CLink,
} from "@chakra-ui/vue"

export default {
  components: {
    CBox,
    CFlex,
    CLink,
  }
}
</script>
