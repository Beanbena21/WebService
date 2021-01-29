const userRouter = require ('./user')

function route(app) {
    app.use('/', userRouter)
    app.get('/', (req, res) => res.send('hello'))
}
module.exports = route