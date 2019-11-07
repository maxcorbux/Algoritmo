module.exports = app => {
    let Address = app.models.address;
    let controller = {};
    controller.listaAddress = function(req, res) {
        let promise = Address.find().exec()
            .then(() => {
                res.json()
            }, erro => {
                console.error(erro);
                res.status(500).json(erro)
            })
    }
    controller.obtemAddress = function(req, res) {
        let _id = req.params.id;
        Address.findById(_id).exec()
            .then(address => {
                if (!address) throw new Error("Endereço não encontrador!")
                res.json(address);
            }, erro => {
                console.log(erro);
                res.status(404).json(erro)
            });
    }
    controller.removeAddress = function(req, res) {
        let _id = req.params.id;
        Address.findByIdAndRemove(_id).exec()
            .then(
                () => {
                    res.status(202).end()
                },
                (erro) => {
                    return erro
                }
            )
    }
    controller.updateAddress = function(req, res) {
        let _id = req.body.id;
        if (_id) {
            Address.findByIdAndUpdate(_id, req.body).exec()
                .then(
                    (user) => { res.json(user) },
                    (erro) => {
                        console.log(erro);
                        res.status(500).json(erro)
                    }
                )
        } else {
            Address.create(req.body).exec()
                .then(
                    function(address) { res.status(201).json(address) },
                    function(erro) {
                        console.log(erro),
                            res.status(500).json(erro)
                    }
                )
        }
    }
}