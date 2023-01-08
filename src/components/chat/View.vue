<script setup>
import { defineProps } from "vue";
import Avatar from "vue-boring-avatars";

const props = defineProps({
 data: Object
})
</script>

<template>

  <div class="kaiwa line" ref="scrollWindow">
    <section v-for="chat in data.chat" :key="chat" class="item">
     <div v-if="chat.uid === data.user.uid">
      <div class="fukidasi right">
       {{ chat.message }}
      </div>
     </div>
      <div v-else>
        <div class="name">
          {{ chat.displayName }}
        </div>
        <div class="fukidasi left">
          <Avatar :name="chat.uid" variant="beam" /> {{ chat.message }}
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.kaiwa.line {
    width: 100%;
    height: 80vh;
    margin: 0 auto;
    padding: 10px 0;
    background: #769ece;
    color: #333;
    line-height: 1.4;
    overflow: scroll;
}
.kaiwa.line .fukidasi {
    position: relative;
    display: inline-block;
    max-width: 192px;
    margin: 8px 0 0;
    padding: 9px 14px;
    border-radius: 19px;
    overflow-wrap: break-word;
    clear: both;
}
.kaiwa.line .fukidasi.left {
    margin-left: 62px;
    background: white;
}
.kaiwa.line .name + .fukidasi.left {
    margin-top: 5px;
}
.kaiwa.line .fukidasi.right {
    float: right;
    margin-right: 12px;
    background: #7adc40;
}
.kaiwa.line svg {
    position: absolute;
    width: 40px;
    height: 40px;
    left: -54px;
    top: -2px;
    border-radius: 20px;
}
.kaiwa.line .name + .left .icon {
    top: -1.8em;
}
.kaiwa.line .fukidasi::after {
    position: absolute;
    content: "";
    width: 24px;
    height: 36px;
    top: -21px;
}
.kaiwa.line .fukidasi.left:after {
    left: -10px;
    border-radius: 18px 0 6px 18px/18px 0 1px 18px;
    box-shadow: -3px -15px 0 -5px white inset;
}
.kaiwa.line .fukidasi.right::after {
    right: -10px;
    border-radius: 0 18px 18px 6px/0 18px 18px 1px;
    box-shadow: inset 3px -15px 0 -5px #7adc40;
}
.kaiwa.line .left + .left::after,
.kaiwa.line .right + .right::after {
    content: none;
}
</style>