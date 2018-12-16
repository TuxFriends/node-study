const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const who = "pocopoco"

    res.render('pages/index', {
        who: who,
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))