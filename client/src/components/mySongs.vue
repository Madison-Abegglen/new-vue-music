<template>
    <div class="playlist">
        <h2>Your Tunes Playlist: </h2>
        <div v-for="(song, index) in mySongs" :key="index">
          <img :src="song.albumArt" alt="album art"/>
          <h2>{{song.name}}</h2>
          <h2>{{song.artistName}}</h2>
          <h2>{{song.album}}</h2>
          <audio :src="song.preview" controls></audio>
            <!-- look @ audio/button & how will u write the playPreview or removeSong?? -->
            <button type="text" @click="removeSong(song._id)">Remove</button>
        </div>
    </div>    
</template>

<script>
export default {
  name: "mySongs",
  computed: {
    mySongs() {
      return this.$store.state.mySongs;
    }
  },
  mounted() {
    this.$store.dispatch("getMySongs");
  },
  methods: {
    removeSong(songId) {
      this.$store.dispatch("removeSong", songId);
    }
  }
};
</script>

<style>
.playlist {
  background-color: #42b983;
}
</style>
