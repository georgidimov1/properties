module.exports = (err, req, res, next) => {
    const handleDuplicateKeyError = (err, res) => {
        const field = Object.keys(err.keyValue);
        const code = 409;
     res.status(code).send(`An account with that ${field} already exists.`);
 }
 if(err.code && err.code == 11000) return err = handleDuplicateKeyError(err, res);
}