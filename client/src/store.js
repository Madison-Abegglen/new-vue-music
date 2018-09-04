import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Song from './models/song'

let songsApi = Axios.create({
  baseURL: `https://itunes.apple.com/search?term=`,
  timeout: 3000
})

let vMusicDb = Axios.create({
  baseURL: `//localhost:3000/songs/`,
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: [],
    mySongs: []
  },
  mutations: {
    setResults(state, results) {
      state.results = results
    },
    setMySongs(state, mySongs) {
      state.mySongs = mySongs
    }
  },
  actions: {
    // get info from itunes
    iTunesSearch({ commit, dispatch }, artistName) {
      songsApi.get(artistName)
        .then(res => {
          let musicResults = res.data.results.map(s => new Song(s))
          commit('setResults', musicResults)
        })
        .catch(e => {
          console.log(e)
        })
    },

    // get your songy songs 
    getMySongs({ commit, dispatch }) {
      vMusicDb.get()
        .then(res => {
          commit('setMySongs', res.data)
        })
    },

    // add songy songs to My Songs
    addToMySongs({ commit, dispatch, state }, song) {
      vMusicDb.post('', song)
        .then(res => {
          dispatch('getResults')
          dispatch('getMySongs')
        })
    },

    removeSong({ commit, dispatch }, songId) {
      vMusicDb.delete('' + songId)
        .then(res => {
          dispatch('getMySongs')
        })
    }
  }
})
