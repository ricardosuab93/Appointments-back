const { Router } = require('express')
const router = Router()
const fs = require('fs')

const pathRouter  = `${__dirname}`

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file)
    const skip = ['index'].includes(fileWithOutExt)

    if(!skip){
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`))
        console.log('CARGAR RUTA -->', removeExtension(file))
    }
})

router.get('*', (req, res) => {
    res.status(404)
    res.send({"Message": "No HTTP resource was found that matches the request URI"})
})

module.exports = router

