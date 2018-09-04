<template>
    <div class="iTunes row">
        <form @submit.prevent="iTunes">
          <input type="text" placeholder="Start a Search by Artist Name">
        </form>
        <div v-for="song in songs" :key="song.tempId">
          <img :src="song.albumArt" alt="album art">
          <h2>{{song.name}}</h2>
          <h2>{{song.artistName}}</h2>
          <h2>{{song.album}}</h2>
          <audio :src="song.preview" controls v-on="preview"></audio>
          <button @click="addToPlaylist(song, playlist)">Add Song to Playlist</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "iTunes",
  computed: {
    songs() {
      return this.$store.state.songs;
    },
    playlist() {
      return this.$store.state.playlist;
    }
  },
  methods: {
    iTunesSearch(event) {
      this.$store.dispatch("iTunesSearch", this.artistName);
    },
    addToPlaylist(song, playlist) {
      let songObj = {
        song,
        playlist
      };
      this.$store.dispatch("addToPlaylist", songObj);
    },
    preview() {
      // how to play preview when button clicked???
    }
  }
};
</script>

<style>
</style>
