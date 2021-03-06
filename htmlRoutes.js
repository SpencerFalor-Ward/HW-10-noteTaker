// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path')
var public = path.join(__dirname, './public')
// var root = path.join(__dirname, '/')
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    app.get('/index', function(req, res) {
        res.sendFile(path.join(public, 'index.html'))
    })

    app.get('/notes', function(req, res) {
        res.sendFile(path.join(public, 'notes.html'))
    })

    // If no matching route is found default to index
    app.get('*', function(req, res) {
        res.sendFile(path.join(public, 'index.html'))
    })

    // //test routes
    // app.get('/index', function(req, res) {
    //     res.sendFile(path.join(root, 'index.html'))
    // })

    // app.get('/notes', function(req, res) {
    //     res.sendFile(path.join(root, 'notes.html'))
    // })

    // // If no matching route is found default to index
    // app.get('*', function(req, res) {
    //     res.sendFile(path.join(root, 'index.html'))
    // })
}
console.log('Test')
