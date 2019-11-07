module.exports = app => {
    let User = app.models.user;
    let controller = {};
    controller.listaUsers = function(req, res) {
        let promise = User.find().exec()
            .then(() => {
                res.json()
            }, erro => {
                console.error(erro);
                res.status(500).json(erro)
            })
    }
    controller.obtemUser = function(req, res) {
        let _id = req.params.id;
        User.findById(_id).exec()
            .then(user => {
                if (!user) throw new Error("Usuário não encontrador!")
                res.json(user);
            }, erro => {
                console.log(erro);
                res.status(404).json(erro)
            });
    }
    controller.removeUser = function(req, res) {
        let _id = req.params.id;
        User.findByIdAndRemove(_id).exec()
            .then(
                () => {
                    res.status(202).end()
                },
                (erro) => {
                    return erro
                }
            )
    }
    controller.updateUser = function(req, res) {
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
    }
}