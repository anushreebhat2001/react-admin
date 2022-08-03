module.exports=(req, res, next) => {
    res.header('Content-Range', 'posts 0-10000/10000')
    next()
}