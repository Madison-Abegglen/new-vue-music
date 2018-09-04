<template>
    <div class="playlist">
        <h2>Your Tunes Playlist: </h2>
        <div v-for="song in playlist.songs">
          <img :src="song.albumArt" alt="album art">
          <h2>{{song.name}}</h2>
          <h2>{{song.artistName}}</h2>
          <h2>{{song.album}}</h2>
          <audio :src="song.preview" controls v-on="playPreview()"></audio>
            <!-- look @ audio/button & how will u write the playPreview or removeSong?? -->
            <button type="text" @click="removeSong">Remove Song</button>
        </div>
    </div>    
</template>

<script>
export default {
  name: "playlist",
  computed: {
    playlist() {
      return this.$store.state.playlist;
    }
  },
  methods: {
    removeSong() {}
  }
};
</script>

<style>
</style>
