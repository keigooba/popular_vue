<template>
<CBox>
  <CText fontSize="2xl" mb="2" color="gray">使い方</CText>
  <CBox>
    <CText>①好みの画像を検索しよう</CText>
    <a href="img/use_img1.2889b65a.png">
      <img src="../../assets/use_img1.png" alt="" width="200">
    </a>
  </CBox>
  <CBox>
    <CText>②画像を押して投稿</CText>
    <a href="img/use_img2.923103b1.png">
      <img src="../../assets/use_img2.png" alt="" width="200">
    </a>
  </CBox>
</CBox>
</template>

<script>
import AssetsImage from "../../assets/use_img1.png"
import AssetsImage2 from "../../assets/use_img2.png"

import {
  CBox,
  CText,
} from "@chakra-ui/vue"

export default {
  components: {
    CBox,
    CText,
  },
  data() {
    return {
      assetsImage: AssetsImage,
      AssetsImage2: AssetsImage2,
    }
  }
}
</script>
