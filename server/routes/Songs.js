let router = require('express').Router()
let Songs = require('../models/Song')

router.get('/', (req, res, next) => {
    Songs.find({})
        .then(songs => {
            return res.send(songs)
        })
        .catch(err => {
            return next(err)
        })
})

router.get('/:id', (req, res, next) => {
    Songs.findById(req.params.id)
        .then(song => res.send(song))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Songs.create(req.body)
        .then(song => res.send(song))
        .catch(next)
})

router.put('/:id', (req, res, next) => {
    Song.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => res.send({
            message: 'Success'
        }))
        .catch(next)
})

router.delete('/:id', (req, res, next) => {
    Songs.findByIdAndRemove(req.params.id)
        .then(() => res.send({
            message: 'Successfully delorted'
        }))
        .catch(next)
})

module.exports = router