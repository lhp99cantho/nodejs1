const siteRouter = require('./site');
const userRouter = require('./user')
const itemsRouter = require('./items')
const adminRouter = require('./admin')

function route(app) {

    app.use('/login', userRouter)
    app.use('/items', itemsRouter)
    app.use('/admin', adminRouter)
    app.use('/', siteRouter);

}

module.exports = route;
