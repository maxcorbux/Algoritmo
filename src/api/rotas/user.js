module.exports = app => {
    const User = app.models.user;
    app.route("/user")
        .all((req, res, next) => {
            delete req.body.id;
            next();
        })
        .get((req, res) => {
            let promise = User.find().exec()
                .then(() => {
                    res.json()
                }, erro => {
                    console.error(erro);
                    res.status(500).json(erro)
                })
        })
        .post((req, res) => {
            let _id = req.body.id;
            if (_id) {
                User.findByIdAndUpdate(_id, req.body).exec()
                    .then(
                        (user) => { res.json(user) },
                        (erro) => {
                            console.log(erro);
                            res.status(500).json(erro)
                        }
                    )
            } else {
                User.create(req.body).exec()
                    .then(
                        function(user) { res.status(201).json(user) },
                        function(erro) {
                            console.log(erro),
                                res.status(500).json(erro)
                        }
                    )
            }
        })
}