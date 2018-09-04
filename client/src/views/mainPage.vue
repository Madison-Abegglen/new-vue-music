<template>
  <div class="mainPage container">
    <h1>VUE  <img alt="Vue logo" src="../assets/logo.png"> Music</h1>
    <mySongs />
    <iTunes />   
  </div>
</template>

<script>
import iTunes from "@/components/iTunes";
import mySongs from "@/components/mySongs";

export default {
  name: "home",
  components: {
    iTunes,
    mySongs
  }
};
</script>

<style>
#mainPage {
  display: flex;
  flex-direction: row;
}
</style>
