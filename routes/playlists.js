const express = require('express')
const router = express.Router()
const models = require('../models')
const fetch = require('node-fetch')



router.post('/collection', (req, res) => {

    const userId = req.session.userId
    const songId = req.body.id
    const songTitle = req.body.title
    const artist = req.body.artistName
    const albumTitle = req.body.albumTitle
    const coverUrl = req.body.coverUrl
    const previewUrl = req.body.previewUrl


    let collection = models.Collection.build({
        userId: userId,
        songId: songId,
        songTitle: songTitle,
        artist: artist,
        albumTitle: albumTitle,
        coverUrl: coverUrl,
        previewUrl: previewUrl
    })

    collection.save().then((savedCollection) => {
        console.log(savedCollection)
        res.json("added to your collection");
    })

})












module.exports = router