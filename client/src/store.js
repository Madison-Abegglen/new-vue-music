import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Song from './models/song'

let songsApi = Axios.create({
  baseUrl: `https://itunes.apple.com/search?term=`,
  timeout: 3000
})

let vMusicDb = Axios.create({
  baseURL: `//localhost:3000`,
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: [],
    playlist: {}
  },
  mutations: {
    setSongs(state, songs) {
      state.songs = songs
    },
    setPlaylist(state, playlist) {
      state.playlist = playlist
    }
  },
  actions: {
    // get info from itunes
    iTunesSearch({ commit, dispatch }, artistName) {
      songsApi.get(`/${artistName}`)
        .then(res => {
          let musicResults = res.data.results.map(s => new Song(s))
          commit('setSongs', res.data)
        })
    },

    // get your songy songs 
    getSongs({ commit, dispatch }) {
      vMusicDb.get('/songs')
        .then(res => {
          commit('setSongs', res.data)
        })
    },

    // add songy songs to playlist
    addToPlaylist({ commit, dispatch, state }, songObj) {
      state.playlist.songs.push(songObj.song)
      // send to vMusic DB
    },

  }
})
