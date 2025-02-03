const express = require("express")
const path = require("path");

const app = express()
const port = 3000

app.use(express.static('public')) // assign 'public' as the folder which contains static files

app.set('view engine', 'ejs') // assign redering engine as ejs
app.set('views', path.join(__dirname, 'views')) // set view folder 

app.get(['/', '/home'], (req, res) => { // root/home page
    res.render("home")
});

app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});