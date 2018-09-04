<template>
    <div class="iTunes row">
        <h2>Search for More Tunes Here</h2>
        <form @submit.prevent="iTunesSearch">
          <input type="text" placeholder="Start a Search by Artist Name" v-model="search">
        </form>
        <div v-for="song in results" :key="song.tempId">
          <img :src="song.albumArt" alt="album art">
          <h2>{{song.name}}</h2>
          <h2>{{song.artistName}}</h2>
          <h2>{{song.album}}</h2>
          <audio :src="song.preview" controls></audio>
          <button @click="addToMySongs(song)">Add to My Songs</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "iTunes",
  data() {
    return {
      search: ""
    };
  },
  computed: {
    results() {
      return this.$store.state.results;
    },
    mySongs() {
      return this.$store.state.mySongs;
    }
  },
  methods: {
    iTunesSearch() {
      this.$store.dispatch("iTunesSearch", this.search);
    },
    addToMySongs(song) {
      this.$store.dispatch("addToMySongs", song);
    }
  }
};
</script>

<style>
</style>
