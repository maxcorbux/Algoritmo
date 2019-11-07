module.exports = app => {
    let Pin = app.models.pin;
    let controller = {};
    controller.listapins = function(req, res) {
        let promise = Pin.find().exec()
            .then(() => {
                res.json()
            }, erro => {
                console.error(erro);
                res.status(500).json(erro)
            })
    }
    controller.obtempin = function(req, res) {
        let _id = req.params.id;
        Pin.findById(_id).exec()
            .then(pin => {
                if (!pin) throw new Error("Usuário não encontrador!")
                res.json(pin);
            }, erro => {
                console.log(erro);
                res.status(404).json(erro)
            });
    }
    controller.removepin = function(req, res) {
        let _id = req.params.id;
        Pin.findByIdAndRemove(_id).exec()
            .then(
                () => {
                    res.status(202).end()
                },
                (erro) => {
                    return erro
                }
            )
    }
    controller.updatepin = function(req, res) {
        let _id = req.body.id;
        if (_id) {
            Pin.findByIdAndUpdate(_id, req.body).exec()
                .then(
                    (pin) => { res.json(pin) },
                    (erro) => {
                        console.log(erro);
                        res.status(500).json(erro)
                    }
                )
        } else {
            Pin.create(req.body).exec()
                .then(
                    function(pin) { res.status(201).json(pin) },
                    function(erro) {
                        console.log(erro),
                            res.status(500).json(erro)
                    }
                )
        }
    }
}