<template>
  <CBox bg="#F5E5FF" p="5">
    <CText fontWeight="bold" color="black">
      &copy; popular
    </CText>
    <CLink as="router-link" to="/agreement" class="c-link" onfocus="this.blur();">
      利用規約
    </CLink>
    <br>
    <CLink as="router-link" to="/privacy_policy" class="c-link" onfocus="this.blur();">
      プライバシーポリシー
    </CLink>
    <br>
    <CLink as="router-link" to="/contact" class="c-link" onfocus="this.blur();">
      お問い合わせ
    </CLink>
    <br>
    <CText as="a" href="https://twitter.com/hx_kei" minH="1100px" class="c-text">
      運営者<img src="../../assets/hx_kei.jpeg"><span class="img_span">@hx_kei</span>
    </CText>
  </CBox>
</template>

<script>
import AssetsImage from "../../assets/hx_kei.jpeg"

import {
  CBox,
  CText,
  CLink,
} from "@chakra-ui/vue"

export default {
  components: {
    CBox,
    CText,
    CLink,
  },
  data() {
    return {
      assetsImage: AssetsImage,
    }
  }
}
</script>

<style scoped>
.c-link {
  color: #9d00ff;
}
img {
  border-radius: 9999px;
  width: 30px;
  position:absolute;
}
.c-text {
  display: relative;
  color: #9d00ff;
}
.img_span {
  margin-left: 30px;
}
</style>
