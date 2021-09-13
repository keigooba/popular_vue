<template>
  <CBox>
    <CFlex>
      <div class="order3">
        <img src="../../assets/hukidashi.png" alt="" width="100%">
        <CText
					color="red"
					position="absolute"
					fontWeight="bold"
					fontSize="2xl"
					top="128px"
					left="45px"
        >
        これで僕も人気者！！
        </CText>
      </div>
      <div class="order2">
        <CText fontSize="2xl" fontWeight="500">
          フリー画像投稿アプリ
        </CText>
        <CText fontSize="6xl" fontWeight="bold" mb="60px">
					<i class="far fa-image"></i>popular
        </CText>
        <img src="../../assets/happy.png" alt="">
        <CButton
          variantColor="cyan"
          width="100%"
          fontSize="xl"
          height="50px"
          v-on:click="addItem"
        >
          ツイッターでログイン
        </CButton>
        <CBox fontSize="xs" color="gray" mt="1">
          <CLink as="router-link" to="/agreement" onfocus="this.blur();" class="router-link">利用規約</CLink>・
          <CLink as="router-link" to="/privacy_policy" onfocus="this.blur();" class="router-link">プライバシーポリシー</CLink>に同意の上ご利用ください
        </CBox>
      </div>
      <div class="order">
        <Usage />
      </div>
    </CFlex>
  </CBox>
</template>

<script>
import AssetsImage from "../../assets/hukidashi.png"
import AssetsImage2 from "../../assets/happy.png"
import Usage from '../organisms//Usage'

import {
  CBox,
  CFlex,
  CText,
  CLink,
  CButton,
} from "@chakra-ui/vue"

export default {
  name: 'Login',
  components: {
    Usage,
    CBox,
    CFlex,
    CText,
    CLink,
    CButton,
  },
  data() {
    return {
      assetsImage: AssetsImage,
      AssetsImage2: AssetsImage2,
    }
  }
}
</script>

<style scoped>
.order3 {
  order: 3;
  position: relative;
}
.order2 {
  order: 2;
  margin-left: 1rem;
	margin-right: 2.5rem;
}
.order {
  order: 1;
  width: 500px;
}
.router-link {
  color: gray;
  text-decoration:underline !important;
}
</style>
