const httpError = (res, err) => {
    console.log(err.message)
    res.status(500)
    res.send({ error: err })
}

module.exports = { httpError }