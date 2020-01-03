module.exports = app => {
    const User = app.models.user;
    app.route("/user")
        .all((req, res, next) => {
            //delete req.body.id;
            next();
        })
        .get((req, res) => {
            let promise = User.find()
                .then(() => {
                    res.json()
                }, erro => {
                    console.error(erro);
                    res.status(500).json(erro)
                })
        })
        .post((req, res) => {
            User.create(req.body)
                .then(
                    function(user) {
                        res.status(201).json(user);
                        console.log("colocando " + user);
                    },
                    function(erro) {
                        console.log(erro),
                            res.status(500).json(erro)
                    }
                )
        })
        .put((req, res) => {
            let _id = req.body.id;
            User.findByIdAndUpdate(_id, req.body)
                .then(
                    (user) => { res.json(user) },
                    (erro) => {
                        console.log(erro);
                        res.status(500).json(erro)
                    }
                )
        });
}