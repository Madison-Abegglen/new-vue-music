export default class Song {
    constructor(data) {
        this.name = data.trackName
        this.artistName = data.artistName
        this.albumArt = data.artworkUrl60.replace(/60x60/g, '100x100')
        this.album = data.collectionName
        this.preview = data.previewUrl
    }
}