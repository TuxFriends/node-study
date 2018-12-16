const express = require('express')
const app = express()
const port = 3000

// for post method
app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.get('/:who', (req, res) => {
    res.render('pages/index', {
        who: req.params.who,
    })
})

app.post('/', (req, res) => {
    res.render('pages/index', {
        who: req.body.who,
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))