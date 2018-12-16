const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const datas = [
        {who: 'foo', is: 'bar'},
        {who: 'bar', is: 'foo'},
    ]

    res.render('pages/loop', {
        datas: datas,
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))