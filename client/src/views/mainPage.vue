<template>
  <div class="mainPage container">
    <img alt="Vue logo" src="../assets/logo.png">
    <iTunes /> 
    <activePlaylist />
  </div>
</template>

<script>
import iTunes from "@/components/iTunes";
import activePlaylist from "@/components/activePlaylist";

export default {
  name: "home",
  components: {
    iTunes,
    activePlaylist
  }
};
</script>

<style>
</style>
