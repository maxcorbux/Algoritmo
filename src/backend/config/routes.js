module.exports = app => {
    app.route('/users')
        .get(app.api.user.get)
        .post(app.api.user.save)

    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)

    app.route('/categories')
        .post(app.api.category.save)
        .get(app.api.category.get)

    app.route('/categories/:id')
        .delete(app.api.category.remove)
        
    app.route('/addresses/')
        .post(app.api.address.save)
        .get(app.api.address.get)

    app.route('/addresses/:id')
        .delete(app.api.address.remove)
    


}