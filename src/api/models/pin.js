module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                { local: "UFMS" },
                { local: "ASdasdasd" },
            ]);
        }
    };
};